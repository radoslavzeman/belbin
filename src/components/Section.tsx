import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import React, { ChangeEvent, MouseEvent } from 'react'

import { changeValue, toggleInput } from '../store/inputsSlice'
import { useAppDispatch, useAppSelector } from '../store/storeHooks'
import { useMyForm } from '../utils/hooks'
import useStyles from './useStyles'

interface Props {
  questions: Object
  title: string
  id: string
}

const Section = ({ questions, title, id }: Props) => {
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const { handleInputChange } = useMyForm()

  const inputs = useAppSelector((state) => state.inputs.inputs)
  const sums = useAppSelector((state) => state.inputs.sums)

  const handleChange = (e: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLTableRowElement>, idx: string) => {
    e.stopPropagation()
    if (inputs[idx].selected) {
      dispatch(changeValue({ id: idx, value: 0 }))
    }
    dispatch(toggleInput({ id: idx }))
  }

  return (
    <Paper className={classes.paper}>
      <Grid container className={classes.sectionHeader}>
        <Typography variant="h6" className={classes.sectionTitle}>
          {title}
        </Typography>
        <Typography variant="h6" className={classes.sectionSum}>
          {sums[id]}
        </Typography>
      </Grid>
      <TableContainer>
        <Table size="small">
          <TableBody>
            {Object.entries(questions).map(([questionKey, questionText]) => (
              <TableRow
                key={questionKey}
                hover
                // onClick={(e) => handleChange(e, questionKey)}
                role="checkbox"
                aria-checked={inputs[questionKey].selected}
                tabIndex={-1}
                selected={inputs[questionKey].selected}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={inputs[questionKey].selected}
                    disableRipple
                    disableFocusRipple
                    disableTouchRipple
                    onChange={(e) => handleChange(e, questionKey)}
                  />
                </TableCell>
                <TableCell>
                  <Typography variant="body1">{questionText}</Typography>
                </TableCell>
                <TableCell width={100}>
                  <TextField
                    id={questionKey}
                    name={questionKey}
                    type="number"
                    onChange={handleInputChange}
                    disabled={!inputs[questionKey].selected}
                    value={inputs[questionKey].value}
                    variant="outlined"
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default Section
