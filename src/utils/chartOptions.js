const { chart } = require('highcharts')

const chartOptions = (resultValues) => {
  // TODO test if resultValues contains all properties
  const exp = 1
  return {
    chart: {
      type: 'variablepie',
    },
    colors: ['#3f51b5', '#3f65b5', '#2b387c', '#4a3fb5'],
    title: {
      text: 'Váš výsledok Belbinovho testu',
    },
    legend: true,
    series: [
      {
        tooltip: {
          pointFormat: `<b>{point.z}</b>`,
        },
        minPointSize: 0,
        zMin: 0,
        zMax: 27,
        data: [
          {
            name: 'Režisér (SH)',
            y: 1,
            z: resultValues.sh ** exp,
          },
          {
            name: 'Zháňač (RI)',
            y: 1,
            z: resultValues.ri ** exp,
          },
          {
            name: 'Predseda (CO)',
            y: 1,
            z: resultValues.co ** exp,
          },
          {
            name: 'Hasič (TW)',
            y: 1,
            z: resultValues.tw ** exp,
          },
          {
            name: 'Ťahač (IM)',
            y: 1,
            z: resultValues.im ** exp,
          },
          {
            name: 'Doťahovač (CF)',
            y: 1,
            z: resultValues.cf ** exp,
          },
          {
            name: 'Chrlič (PL)',
            y: 1,
            z: resultValues.pl ** exp,
          },
          {
            name: 'Analytik (ME)',
            y: 1,
            z: resultValues.me ** exp,
          },
        ],
      },
    ],
  }
}

export default chartOptions
