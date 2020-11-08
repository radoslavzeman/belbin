import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import labels from '../utils/labels'

import { useMyForm, useStyles } from '../utils/hooks'

//chart
import chartOptions from '../utils/chartOptions'
import Highcharts from "highcharts/highstock";
import variablePie from "highcharts/modules/variable-pie.js";
import HighchartsReact from "highcharts-react-official";

variablePie(Highcharts);

function BelbinForm() {
  const classes = useStyles();
  const { register, handleSubmit, watch, errors } = useForm();
  const [options, setOptions] = useState();
  const [sums, setSums] = useState({
    q1: 0, q2: 0, q3: 0, q4: 0, q5: 0, q6: 0, q7: 0,
  });

  // const {inputs, handleInputChange, handleSubmit, results} = useMyForm();

  const computeResults = (data) => {
    const r = (key) => { // TODO do it better
      return data[key] === "" ? 0 : parseInt(data[key]);
    }
    console.log(r('1a') + r('1b'))
    return {
      sh: r('1a') + r('1b') + r('1c') + r('1d') + r('1e') + r('1f') + r('1g') + r('1h'),
      ri: r('2a') + r('2b') + r('2c') + r('2d') + r('2e') + r('2f') + r('2g') + r('2h'),
    }

  }

  const onSubmit = data => {
    const results = computeResults(data);
    console.log('from onSubmit', data, results);
    setOptions(chartOptions(results));
  }


  // useEffect(() => {
  //   console.log('from BelbinForm, results changed', results)
  //   // chart
  //   setOptions(chartOptions(results));
  // }, [results])

	return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Belbinov test tímových rolí
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
          <Grid container spacing={3}>
            <form onSubmit={handleSubmit(onSubmit)}>
              {Object.keys(labels).map((key) => (
                <React.Fragment>
                  <Paper className={classes.paper} align="left">
                    <h4>{labels[key].title}</h4>
                  
                    {Object.keys(labels[key].questions).map((questionKey) => (
                      <React.Fragment>
                        <Grid container spacing={1}>
                          <Grid item xs={2} sm={1}>
                            <TextField
                              id={questionKey}
                              key={questionKey}
                              name={questionKey}
                              type="number"
                              inputRef={register({
                                min: 0,
                              })}
                              // inputProps={{"key": questionKey}}
                              // value={inputs[questionKey] ? inputs[questionKey] : ""}
                              // inline
                            />
                            </Grid>
                            <Grid item xs={10} sm={11}>
                              {labels[key].questions[questionKey]}
                            </Grid>
                        </Grid>
                      </React.Fragment>
                    ))}

                    <h5>{sums[key]}</h5>
                    {Object.keys(labels[key].questions).map((questionKey) => parseInt(watch(questionKey))) }
                    {/* parseInt(watch('1a')) + parseInt(watch('1b')) + parseInt(watch('1c')) || 0} */}
                  </Paper>
                </React.Fragment>
              ))}
                <div className={classes.buttons}>
                  <Button
                    variant="contained"
                    color="primary"
                    // onClick={handleSubmit(onSubmit)}
                    className={classes.button}
                    type="submit"
                  >
                  {'See results'}
                  </Button>
                </div>

          <React.Fragment>
						<Paper className={classes.paper} align="center">
							<Grid container spacing={1}>
								<HighchartsReact
									highcharts={Highcharts}
									options={options}
									useRef="chartComponent1"
								/>
							</Grid>
						</Paper>
					</React.Fragment>
          </form>
          </Grid>
      </main>
    </React.Fragment>
	)
}

export default BelbinForm
