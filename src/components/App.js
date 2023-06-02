import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from '../firebase/Auth/Auth';

// all routes of all views
import arrOfRoutes from '../Routes';

const App = () => {
  return(
    <AuthProvider>
      <Router>
        <Switch>
          {arrOfRoutes.map((el, id ) => (
            <Route path={el.path} key={id} component={el.component} exact />
          ))}
        </Switch>
      </Router>
    </AuthProvider>
  )

}

export default App;
