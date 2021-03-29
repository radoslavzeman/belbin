import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  paper: {
    marginTop: theme.spacing(3),
  },
  initText: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
  },
  sectionHeader: {
    padding: theme.spacing(2),
    background: theme.palette.grey['300'],
    borderTopLeftRadius: theme.shape.borderRadius,
    borderTopRightRadius: theme.shape.borderRadius,
  },
  sectionTitle: {
    flex: 1,
  },
  sectionSum: {
    flex: '0 0 20px',
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  chart: {
    padding: theme.spacing(1, 0),
  },
}))

export default useStyles
