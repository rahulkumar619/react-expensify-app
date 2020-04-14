
import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import ExpenseDashBoardPage from '../components/ExpenseDashBoardPage';
import AddExpense from '../components/AddExpense';
import EditExpensePage from '../components/EditExpense';
import HelpPage from '../components/HelpPage';
import NotFound from '../components/NotFound';

import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (

    <Router history={history}>
    <div>
   
      <Switch>
        <PublicRoute path='/' component={LoginPage}  exact={true} />
        <PrivateRoute path="/dashboard" component={ExpenseDashBoardPage} />
        <PrivateRoute path="/create" component={AddExpense} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;

