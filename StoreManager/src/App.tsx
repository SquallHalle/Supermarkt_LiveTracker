import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { FetchData } from "./components/index";
import {
  Authentication,
  Home,
  MarketRegister,
  UpdateStatus
} from "./pages/index";

export const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/auth'>auth</Link>
        </li>
        <li>
          <Link to='/updatestatus'>upatestatus</Link>
        </li>
        <li>
          <Link to='/register'>Register</Link>
        </li>
      </ul>

      <hr />

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <FetchData />
        </Route>
        <Route path='/updatestatus'>
          <UpdateStatus />
        </Route>
        <Route path='/register'>
          <MarketRegister />
        </Route>
        <Route path='/auth'>
          <Authentication />
        </Route>
      </Switch>
    </div>
  </Router>
);
