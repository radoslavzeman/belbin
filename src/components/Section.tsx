import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
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

  return (
    <>
      <Paper className={classes.paper}>
        <Grid container spacing={1}>
          <Grid item xs={10} sm={11}>
            <h4>{title}</h4>
          </Grid>
          <Grid item xs={2} sm={1}>
            <h3>{sums[id]}</h3>
          </Grid>
        </Grid>
        {Object.entries(questions).map(([questionKey, questionText]) => (
          <>
            <Grid container spacing={1}>
              <Grid item xs={10} sm={11}>
                {questionText}
              </Grid>
              <Grid item xs={2} sm={1}>
                <TextField
                  id={questionKey}
                  // inputProps={{ key: { questionKey } }} // TODO this does not work
                  name={questionKey}
                  type="number"
                  onChange={handleInputChange}
                  value={inputs[questionKey]}
                />
              </Grid>
            </Grid>
          </>
        ))}
      </Paper>
    </>
  )
}

export default Section
