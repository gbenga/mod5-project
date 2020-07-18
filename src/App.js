import React from "react";
import "./App.css";
import MedicinesIndexPage from "./components/pages/MedicinesIndexPage";
import PharmasIndexPage from "./components/pages/PharmasIndexPage";
import MedicineShowPage from "./components/pages/MedicineShowPage";
import PharmaShowPage from "./components/pages/PharmaShowPage";
import OrderPage from "./components/pages/OrderPage";
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
          <Route
            exact
            path="/medicines/:medicineId"
            render={(routerProps) => <MedicineShowPage {...routerProps} />}
          />
          <Route
            exact
            path="/pharmas/:pharmaId"
            render={(routerProps) => <PharmaShowPage {...routerProps} />}
          />
          <Route
            exact
            path="/medicines/:medicineId/order"
            render={(routerProps) => <OrderPage {...routerProps} />}
          />
          <Route exact path="/">
            <div>Just a placeholder for a homepage</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
