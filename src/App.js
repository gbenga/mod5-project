import React from "react";
import "./App.css";
import MedicinesIndexPage from "./components/pages/MedicinesIndexPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/medicines">Medicines</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/medicines">
            <MedicinesIndexPage />
          </Route>
          <Route exact path="/">
            <div>Just a placeholder for a homepage</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
