import { lazy } from 'react'

interface IRouter {
  path: string
  exact: boolean
  useAuth: boolean
  redirect?: string
  component: any
}
const RouteConfig: IRouter[] = [
  {
    path: '/',
    exact: true,
    useAuth: false,
    component: lazy(() => import('../pages/Home')),
  },
  {
    path: '/login',
    exact: true,
    useAuth: true,
    component: lazy(() => import('../pages/Login')),
  },
]
export default RouteConfig
