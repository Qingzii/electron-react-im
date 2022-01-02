import React, { useEffect, Suspense } from 'react'
import { Switch, Route, Redirect, useHistory, useLocation } from 'react-router-dom'
import routes from './routeConfig'
import { inject, observer } from 'mobx-react'
interface IProps {
  store?: IMobx
}
const Routes: React.FC<IProps> = ({ store }) => {
  return (
    <Switch>
      {routes
        .filter(item => (store?.token ? !item.useAuth : item.useAuth))
        .map((item, index) =>
          item.component ? (
            <Route exact key={index} path={item.path} render={() => <item.component />} />
          ) : (
            <Redirect to={'/'} key={index} />
          )
        )}
    </Switch>
  )
}
const IndexRouter: React.FC<IProps> = ({ store }) => {
  const history = useHistory()
  const location = useLocation()
  console.log(location.pathname)
  useEffect(() => {
    switch (true) {
      case /^(\/|\/index.html)$/.test(location.pathname) && !store?.token:
        history.push('/login')
        break
      default:
        window.scrollTo(0, 0)
        break
    }
  }, [location, store?.token])
  return (
    <React.Fragment>
      <Suspense fallback={'<Loading />'}>
        <Routes store={store} />
      </Suspense>
    </React.Fragment>
  )
}
export default inject('store')(observer(IndexRouter))
