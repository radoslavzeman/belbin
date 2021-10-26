import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
  },
  appBar: {
    backgroundColor: 'white',
    boxShadow: '0 0 10px 0 rgb(36 38 40 / 10%)',
  },
  initText: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
  },
  sectionHeader: {
    padding: theme.spacing(2),
    // background: theme.palette.primary.light,
    borderTopLeftRadius: theme.shape.borderRadius,
    borderTopRightRadius: theme.shape.borderRadius,
    borderColor: theme.palette.grey['100'],
    borderBottom: `1px solid ${theme.palette.grey['300']}`,
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
  results: {
    padding: theme.spacing(2, 10, 1),
  },
}))

export default useStyles
