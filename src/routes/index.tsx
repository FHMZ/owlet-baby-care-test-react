import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import LoginPage from '../pages/Login'
import HomePage from '../pages/Home'

interface IAppRouteProps {
  path: string
  component: any
}

interface IRoute {
  id: number
  path: string
  component: any
}

const routes: IRoute[] = [
  {
    id: 1,
    path: '/login',
    component: LoginPage,
  },
  {
    id: 2,
    path: '/home',
    component: HomePage,
  },
  {
    id: 3,
    path: '/',
    component: LoginPage,
  },
]

const EMPTY_PATH = '/'

const AppRoutes: React.FC<IAppRouteProps> = ({ path, component }) => (
  <>
    {path === EMPTY_PATH ? (
      <Redirect to="/login" />
    ) : (
      <Route path={path} component={component} exact />
    )}
  </>
)

const Routes = () => (
  <Switch>
    {routes.map((route) => (
      <AppRoutes key={route.id} path={route.path} component={route.component} />
    ))}
  </Switch>
)

export default Routes
