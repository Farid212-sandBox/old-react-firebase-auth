import Dashboard from '../views/Dashboard';
import Home from '../views/Home';
import LogIn from '../views/LogIn';
import SignUp from '../views/SignUp';

const arrOfRoutes = [
  { path: '/', component: Home },
  { path: '/dashboard', component: Dashboard },
  { path: '/login', component: LogIn },
  { path: '/signup', component: SignUp }
];

export default arrOfRoutes;
