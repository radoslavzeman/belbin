import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

declare module '@material-ui/core/styles' {
  interface Theme {
    myPalette: {
      hoverColor: string
      tableHeadColor: string
    }
  }
  interface ThemeOptions {
    myPalette?: {
      hoverColor?: string
      tableHeadColor?: string
    }
  }
}

// eslint-disable-next-line import/no-mutable-exports
let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1976d2', // default mui
      contrastText: '#fff',
    },
    secondary: {
      main: '#41b6e6', // cx
    },
    background: {
      default: '#f6f8fb',
    },
  },
  myPalette: {
    hoverColor: '#f4f7fa',
    tableHeadColor: '#4d555d',
  },
  shape: {
    borderRadius: 2,
  },
})

theme = createMuiTheme(theme, {
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0px 1px 2px 0px rgb(0, 0, 0, 0.16)',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: '#e9ebee',
          '& :hover': {
            backgroundColor: theme.myPalette.hoverColor,
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: theme.palette.common.white,
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:last-child td, &:last-child th': { border: 0 },
        },
        head: {
          backgroundColor: theme.myPalette.tableHeadColor,
        },
      },
    },
  },
})

theme = responsiveFontSizes(theme)

export default theme
