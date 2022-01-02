//  登录|注册
import './index.scss'
import Login from './Login'
import Register from './Register'
import icon from '../../assets/images/logo/icon.svg'
import * as React from 'react'

interface IProps {
  store: IMobx
}
const LoginReg: React.FC<IProps> = () => {
  return (
    <div className='login_reg'>
      <img className='logo' src={icon} alt='' />
      <h2>Telegram</h2>
      <p>Please confirm your country code and enter your phone number.</p>
      <Login />
      <Register />
    </div>
  )
}
export default LoginReg
