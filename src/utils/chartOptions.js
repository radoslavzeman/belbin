const { chart } = require("highcharts")

const chartOptions = (resultValues) => {
		// TODO test if resultValues contains all properties
		const exp = 1;
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
							y: 1,
							z: resultValues.sh ** exp,
						},
						{
							name: "Zháňač (RI)",
							y: 1,
							z: resultValues.ri ** exp,
						},
						{
							name: "Predseda (CO)",
							y: 1,
							z: resultValues.co ** exp,
						},
						{
							name: "Hasič (TW)",
							y: 1,
							z: resultValues.tw ** exp,
						},
						{
							name: "Ťahač (IM)",
							y: 1,
							z: resultValues.im ** exp,
						},
						{
							name: "Doťahovač (CF)",
							y: 1,
							z: resultValues.cf ** exp,
						},
						{
							name: "Chrlič (PL)",
							y: 1,
							z: resultValues.pl ** exp,
						},
						{
							name: "Analytik (ME)",
							y: 1,
							z: resultValues.me ** exp,
						},
					]
				}
			]
		})
}

export default chartOptions;