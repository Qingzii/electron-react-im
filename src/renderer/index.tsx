import { render } from 'react-dom'
import App from './App'
import { Provider } from 'mobx-react'
import { store } from '../store'
import '../assets/css/color.scss'
import '../assets/css/global.scss'
import '../assets/css/normalize.min.css'
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
