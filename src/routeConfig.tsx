import { RouteConfig } from 'react-router-config';
import Counter from './pages/Counter';
import Helloworld from './pages/Helloworld';
import Home from './pages/Home';
import Main from './pages/Main';

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
  },
  {
    path: '/main',
    exact: true,
    component: Main,
  },
  {
    path: '/counter',
    exact: true,
    component: Counter
  }
]

export default routesConfig;