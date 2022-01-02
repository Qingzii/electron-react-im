import './index.scss'
import LeftCom from './leftCom/index'
import RightCom from './rightCom/index'
// 注册
const Home = () => {
  return (
    <div className='Home'>
      Home
      <LeftCom />
      <RightCom />
    </div>
  )
}
export default Home
