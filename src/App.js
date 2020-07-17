import React from "react";
import "./App.css";
import MedicinesIndexPage from "./components/pages/MedicinesIndexPage";
import PharmasIndexPage from "./components/pages/PharmasIndexPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
          <li>
            <Link to="/pharmas">Pharmacies</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/medicines">
            <MedicinesIndexPage />
          </Route>
          <Route exact path="/pharmas">
            <PharmasIndexPage />
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
