const { chart } = require("highcharts")

const chartOptions = (resultValues) => {
		// if (!resultValues.hasProperty('sh')) // TODO test if resultValues contains all properties
		console.log('from chartOptions');
		return ({
			chart: {
				type: "variablepie",
			},
			colors: ["#2ec277", "#2db799", "#b7e886", "#6d5494", "#0077b4"],
			title: {
				text: "Váš výsledok Belbinovho testu"
			},
			series: [
				{
					minPointSize: 0,
					// innerSize: "27%",
					zMin: 0,
					zMax: 27,
					// sizeBy: 'area',
					// name: "Job Match",
					data: [
						{
							name: "Režisér (SH)",
							y: 100,
							z: resultValues.sh //inputs['1a'] + inputs['2a']
						},
						{
							name: "Zháňač (RI)",
							y: 100,
							z: resultValues.ri // inputs['1b'] + inputs['2b']
						},
						// {
						// 	name: "Zháňač (RI)",
						// 	y: 100,
						// 	z: resultValues.ri // inputs['1b'] + inputs['2b']
						// },
					]
				}
			]
		})
}

export default chartOptions;