import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
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
import { useMyForm } from '../utils/hooks'
import { labels } from '../utils/labels'
import Section from './Section'
import useStyles from './useStyles'

variablePie(Highcharts)

function BelbinForm() {
  const classes = useStyles()
  const [options, setOptions] = useState<any>() // chart options
  const { handleSubmit, errors } = useMyForm()

  const results = useAppSelector((state) => state.inputs.results)

  useEffect(() => {
    setOptions(chartOptions(results)) // chart
  }, [results])

  return (
    <>
      <CssBaseline />

      <AppBar position="relative" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap align="center">
            Belbinov test tímových rolí
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" component="main">
        <Grid container direction="column">
          <Grid item xs={12}>
            <Paper className={classes.initText}>
              <Typography variant="body2">
                Tento dotazník má celkovo 7 sekcií označených rímskymi číslicami. V každej sekcii dotazníka si najskôr
                vyberte tie výroky, ktoré vás najlepšie vystihujú. Môžete si vybrať jeden, dva, alebo viac výrokov.
                Vybrané výroky potom ohodnoťte bodovým hodnotením tak, že medzi ne rozdelíte vždy 10 bodov v každej
                sekcii. Ako pomôcka vám može poslúžiť súčet rozdelených bodov pre danú sekciu zobrazený vpravo hore.
              </Typography>
            </Paper>
          </Grid>
          {Object.entries(labels).map(([id, section]) => (
            <Grid item xs={12}>
              <Section title={section.title} questions={section.questions} id={id} />
            </Grid>
          ))}

          <Grid container item xs={12} justify="center">
            <Button variant="contained" color="primary" onClick={handleSubmit} className={classes.button}>
              Zobraziť výsledok
            </Button>
          </Grid>
          <Grid container item xs={12} justify="center" style={{ color: '#f00', paddingBottom: 24 }}>
            {errors}
          </Grid>
          {!errors && (
            <>
              <Grid item xs={12}>
                <Paper className={classes.chart}>
                  <HighchartsReact highcharts={Highcharts} options={options} useRef="chartComponent1" />
                  <Grid container spacing={1} justify="center" className={classes.results}>
                    <Grid item>
                      <Typography>
                        Režisér (SH): <b>{results.sh}</b>
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography>
                        Zháňač (RI): <b>{results.ri}</b>
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography>
                        Predseda (CO): <b>{results.co}</b>
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography>
                        Hasič (TW): <b>{results.tw}</b>
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography>
                        Ťahač (IM): <b>{results.im}</b>
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography>
                        Doťahovač (CF): <b>{results.cf}</b>
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography>
                        Chrlič (PL): <b>{results.pl}</b>
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography>
                        Analytik (ME): <b>{results.me}</b>
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid container item xs={12} justify="center">
                <Button variant="outlined" color="secondary" onClick={() => window.print()} className={classes.button}>
                  Vytlačiť výsledok
                </Button>
              </Grid>
            </>
          )}
        </Grid>
      </Container>
    </>
  )
}

export default BelbinForm
