import './App.scss'
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import LoginReg from '../pages/Login'

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
      <Router>
        <Switch>
          <Route path='/' component={LoginReg} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}
export default inject('store')(observer(App))
