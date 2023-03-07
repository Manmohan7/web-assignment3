import Home from './Home'
import Tools from './Tools'
import Services from './Services'
import About from './About'
import Report from './Report'
import Login from './Login'
import User from './User'


const routes = [{
    name: 'Home',
    path: '/',
    element: <Home />
  }, {
    name: 'Tools',
    path: '/tools',
    element: <Tools />
  }, {
    name: 'Services',
    path: '/services',
    element: <Services />
  }, {
    name: 'About',
    path: '/about',
    element: <About />
  }, {
    name: 'Report',
    path: '/report',
    element: <Report />
}, {
  name: 'Login',
  path: '/login',
  element: <Login />
}, {
  name: 'User',
  path: '/user',
  element: <User />
}]


export default routes