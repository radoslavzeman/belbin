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

  const {inputs, handleInputChange, handleSubmit, results} = useMyForm();
  const [sums, setSums] = useState({
    q1: 0, q2: 0, q3: 0, q4: 0, q5: 0, q6: 0, q7: 0,
  });
  const classes = useStyles();
  const [options, setOptions] = useState();  // chart options

  useEffect(() => {
    console.log('from BelbinForm, results changed', results)
    setOptions(chartOptions(results));  // chart
  }, [results]);

  useEffect(() => {
    setSums({
      //q1: +(inputs.q1a) + +(inputs.q1b),
      q1: +(inputs.q1a) + +(inputs.q1b) + +(inputs.q1c) + +(inputs.q1d) + +(inputs.q1e) + +(inputs.q1f) + +(inputs.q1g) + +(inputs.q1h),
      q2: +(inputs.q2a) + +(inputs.q2b) + +(inputs.q2c) + +(inputs.q2d) + +(inputs.q2e) + +(inputs.q2f) + +(inputs.q2g) + +(inputs.q2h),
    }) 
  }, [inputs]);

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
              {Object.keys(labels).map((key) => (
                <React.Fragment>
                  <Paper className={classes.paper} align="left">
                    <Grid container spacing={1}>
                      <Grid item xs={10} sm={11}>
                        <h4>{labels[key].title}</h4>
                      </Grid>
                      <Grid item xs={2} sm={1} align="right">
                        <h3>{sums[key]}</h3>
                      </Grid>
                    </Grid>
                    {Object.keys(labels[key].questions).map((questionKey) => (
                      <React.Fragment>
                        <Grid container spacing={1}>
                          <Grid item xs={10} sm={11} >
                            {labels[key].questions[questionKey]}
                          </Grid>
                          <Grid item xs={2} sm={1}>
                            <TextField
                              id={questionKey}
                              key={questionKey} // TODO this does not work
                              name={questionKey}
                              type="number"
                              onChange={handleInputChange}
                              // value={inputs[questionKey] ? inputs[questionKey] : ""}
                              value={inputs[questionKey]}
                            />
                            </Grid>
                        </Grid>
                      </React.Fragment>
                    ))}
                  </Paper>
                </React.Fragment>
              ))}
                <div className={classes.buttons}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    className={classes.button}
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
          </Grid>
      </main>
    </React.Fragment>
	)
}

export default BelbinForm