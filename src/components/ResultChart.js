import React, { useState, useEffect } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// Import Highcharts
import Highcharts from "highcharts/highstock";
import variablePie from "highcharts/modules/variable-pie.js";
//import HighchartsReact from "./HighchartsReact.js";
import HighchartsReact from "highcharts-react-official";

import { useMyForm, useStyles } from '../utils/hooks'

import chartOptions from '../utils/chartOptions'


variablePie(Highcharts);


function ResultChart() {
	const classes = useStyles();

	const [options, setOptions] = useState();

	const { handleSubmit,
    handleInputChange,
		inputs,
		results, } = useMyForm();

	console.log('from ResultChart', options);

  useEffect(() => {
		console.log('from ResultChart, results changed', results)
		setOptions(chartOptions(results));
  }, [results])

	return (
		<React.Fragment>
			<main className={classes.layout}>
				<Grid container spacing={3} align="center">
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

export default ResultChart;