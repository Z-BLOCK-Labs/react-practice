import { RouteConfig } from 'react-router-config';
import Helloworld from './pages/Helloworld';
import Home from './pages/Home';

const routesConfig: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/helloWorld',
    exact: true,
    component: Helloworld,
  }
]

export default routesConfig;