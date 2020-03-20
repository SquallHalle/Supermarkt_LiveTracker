import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Toggle, FetchData } from "./components/index";
import { Home } from "./pages/index";

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
      </ul>

      <hr />

      <Switch>
        <Route exact path='/'>
          <div>
            Main
            <FetchData />
          </div>
        </Route>
        <Route path='/about'>
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
);
