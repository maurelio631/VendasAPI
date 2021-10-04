import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SelectFunctionScreen from "../src/Views/SelectFunctionScreen.js";
import ControlProducts from "../src/Views/ControlProducts.js";
import ProductConfirmation from "../src/Views/ProductConfirmation.js";
import ProductsList from "./Views/ProductsList";
import Sell from "./Views/Sell";
import ConfirmSell from "./Views/ConfirmSell";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./Reducers";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const store = createStore(reducers, compose(applyMiddleware(thunk)));
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact>
          <SelectFunctionScreen />
        </Route>
        <Route path="/controlproducts" component={ControlProducts} />
        <Route path="/ProductConfirmation" component={ProductConfirmation} />
        <Route path="/ProductsList" component={ProductsList} />
        <Route path="/Sell" component={Sell} />
        <Route path="/ConfirmSell" component={ConfirmSell} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
