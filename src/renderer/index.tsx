import { render } from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { store } from '../store'
import '../assets/css/bootstrap.min.css'
import '../assets/css/normalize.min.css'
import '../assets/css/color.scss'
import '../assets/css/global.scss'
render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
