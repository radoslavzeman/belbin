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
import { useMyForm, useStyles } from '../utils/hooks'

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
    if (inputs[idx].selected) {
      dispatch(changeValue({ id: idx, value: 0 }))
    }
    dispatch(toggleInput({ id: idx }))
  }

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={1}>
        <Grid item xs={10} sm={11}>
          <h3>{title}</h3>
        </Grid>
        <Grid item xs={2} sm={1}>
          <h3>{sums[id]}</h3>
        </Grid>
      </Grid>
      <TableContainer>
        <Table>
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
                <TableCell>
                  <Typography variant="body1">{questionText}</Typography>
                </TableCell>
                <TableCell>
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
                <TableCell padding="checkbox">
                  <Checkbox checked={inputs[questionKey].selected} onChange={(e) => handleChange(e, questionKey)} />
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
