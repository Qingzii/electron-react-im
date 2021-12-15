import { MemoryRouter as Router, Switch, Route } from 'react-router-dom'
import icon from '../../assets/icon.svg'
import './App.scss'

const Hello = () => {
  return (
    <div>
                        <div className='Hellooo'>
        <img width='200px' alt='icon' src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
    </div>
  )
}

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Hello} />
      </Switch>
    </Router>
  )
}
export default App
