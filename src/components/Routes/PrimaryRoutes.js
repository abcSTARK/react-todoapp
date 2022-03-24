import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Users from './Users';
import Home from './Home';
import NotFound from './NotFound';
import Todos from './Todos';
import Albums from './Albums';

const PrimaryRoutes = (props) => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/users' component={Users}></Route>
        <Route exact path='/todos' component={Todos}></Route>
        <Route exact path='/albums' component={Albums}></Route>
        <Redirect from='/home' to='/' />
        <Route component={NotFound}></Route>
      </Switch>
    </React.Fragment>
  );
};

export default PrimaryRoutes;
