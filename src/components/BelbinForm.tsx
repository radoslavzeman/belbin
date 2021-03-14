import { TextField } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Highcharts from 'highcharts/highstock'
import variablePie from 'highcharts/modules/variable-pie'
import HighchartsReact from 'highcharts-react-official'
import React, { useEffect, useState } from 'react'

import { useAppSelector } from '../store/storeHooks'
import chartOptions from '../utils/chartOptions'
import { useMyForm, useStyles } from '../utils/hooks'
import { labels } from '../utils/labels'
import Section from './Section'

variablePie(Highcharts)

function BelbinForm() {
  const classes = useStyles()
  const [options, setOptions] = useState<any>() // chart options
  const { handleSubmit, results, errors } = useMyForm()

  useEffect(() => {
    setOptions(chartOptions(results)) // chart
  }, [results])

  return (
    <>
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
          <Paper className={classes.paper}>
            <Grid container spacing={1}>
              <div>
                Tento dotazník má celkovo 7 sekcií označených rímskymi číslicami. V každej sekcii dotazníka si vyberte
                tie výroky, ktoré vás najlepšie vystihujú. Môžete si vybrať jeden, dva, alebo viac výrokov. Vybrané
                výroky potom ohodnoťte bodovým hodnotením tak, že medzi ne rozdelíte vždy 10 bodov v každej sekcii. Ako
                pomôcka vám može slúžiť súčet rozdelených bodov pre danú sekciu zobrazený vpravo hore.
              </div>
            </Grid>
          </Paper>

          {Object.entries(labels).map(([id, section]) => (
            <Section title={section.title} questions={section.questions} id={id} />
          ))}

          <div className={classes.buttons}>
            <Button variant="contained" color="primary" onClick={handleSubmit} className={classes.button}>
              Zobraziť výsledok
            </Button>
            {errors}
          </div>

          {!errors && (
            <Paper className={classes.paper}>
              <Grid container spacing={3}>
                <HighchartsReact highcharts={Highcharts} options={options} useRef="chartComponent1" />
              </Grid>
            </Paper>
          )}
        </Grid>
      </main>
    </>
  )
}

export default BelbinForm
