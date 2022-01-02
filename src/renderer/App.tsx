import { inject, observer } from 'mobx-react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Routers from 'routers'
const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#8774e1',
      },
      secondary: {
        light: '#0066ff',
        main: '#0044ff',
        contrastText: '#ffcc00',
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Routers />
    </ThemeProvider>
  )
}
export default inject('store')(observer(App))
