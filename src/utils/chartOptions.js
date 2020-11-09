const { chart } = require("highcharts")

const chartOptions = (resultValues) => {
		// TODO test if resultValues contains all properties
		return ({
			chart: {
				type: "variablepie",
			},
			colors: ["#2ec277", "#2db799", "#b7e886", "#007770"],
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
							z: resultValues.sh,
						},
						{
							name: "Zháňač (RI)",
							y: 100,
							z: resultValues.ri,
						},
						{
							name: "Predseda (CO)",
							y: 100,
							z: resultValues.co,
						},
						{
							name: "Hasič (TW)",
							y: 100,
							z: resultValues.tw,
						},
						{
							name: "Ťahač (IM)",
							y: 100,
							z: resultValues.im,
						},
						{
							name: "Doťahovač (cf)",
							y: 100,
							z: resultValues.cf,
						},
						{
							name: "Chrlič (PL)",
							y: 100,
							z: resultValues.pl,
						},
						{
							name: "Analytik (ME)",
							y: 100,
							z: resultValues.me,
						},
					]
				}
			]
		})
}

export default chartOptions;