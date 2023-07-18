import { lazy } from 'react'

import { mainConfig } from 'config'
import { routeTypes } from 'types'

const Home = lazy(() => import('./Home'))
const Page404 = lazy(() => import('./Route404'))

const routes: Array<routeTypes.Routes> = [
  {
    name: 'home',
    component: Home,
    path: '/',
  },
  {
    name: 'changelog',
    badge: mainConfig.appVersion,
    path: 'https://github.com/eoscostarica/full-stack-boilerplate/tags',
    component: undefined,
  },
  {
    header: 'community',
    name: 'github',
    path: 'https://github.com/eoscostarica/full-stack-boilerplate',
    component: undefined,
  },
  {
    name: 'telegram',
    path: 'https://t.me/eoscr',
    component: undefined,
  },
  {
    component: Page404,
  },
]

const _reduceRoutes = (routes: Array<routeTypes.Routes>, route: routeTypes.Routes) => [
  ...routes,
  ...(route.childrens ? route.childrens : [route]),
]

const getRoutes = (role: string) => {
  const routesForRole = routes.filter(
    (route: routeTypes.Routes) => !route.roles || route.roles.includes(role),
  )

  return {
    sidebar: routesForRole.filter((route) => !!route.name),
    browser: routesForRole
      .reduce(_reduceRoutes, [])
      .filter((route: routeTypes.Routes) => !!route.component),
  }
}

export default getRoutes
