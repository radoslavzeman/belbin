import { Checkbox } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import React, { useEffect } from 'react'

import { useAppSelector } from '../store/storeHooks'
import { useMyForm, useStyles } from '../utils/hooks'

interface Props {
  questions: Object
  title: string
  id: string
}

const Section = ({ questions, title, id }: Props) => {
  const classes = useStyles()

  const { handleInputChange } = useMyForm()

  const inputs = useAppSelector((state) => state.inputs.inputs)
  const sums = useAppSelector((state) => state.inputs.sums)

  const isItemSelected = false
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
                key={id}
                hover
                onClick={(event) => {}}
                role="checkbox"
                aria-checked={isItemSelected}
                tabIndex={-1}
                selected={isItemSelected}
              >
                {/* <TableCell padding="checkbox"> */}
                {/*  <Checkbox checked={isItemSelected} inputProps={{ 'aria-labelledby': id }} /> */}
                {/* </TableCell> */}
                <TableCell>
                  <Typography variant="body1">{questionText}</Typography>
                </TableCell>
                <TableCell>
                  <TextField
                    id={questionKey}
                    // inputProps={{ key: { questionKey } }} // TODO this does not work
                    name={questionKey}
                    type="number"
                    onChange={handleInputChange}
                    value={inputs[questionKey]}
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
