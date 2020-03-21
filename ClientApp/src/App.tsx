import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { FetchData, Navbar } from "./components/index";
import {
  Authentication,
  Home,
  MarketRegister,
  UpdateStatus
} from "./pages/index";

export const App = () => (
  <Router>
    <div>
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
      <Navbar />
    </div>
  </Router>
);
