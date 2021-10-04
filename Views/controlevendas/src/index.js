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

const store = createStore(reducers, compose(applyMiddleware(thunk)));
ReactDOM.render(
  <Provider store={store}>
    {/* <SelectFunctionScreen />  */}
    {/* <ControlProducts />   */}
    {/* <ProductConfirmation/> */}
    <ProductsList /> 
    {/* <Sell /> */}
    {/* <ConfirmSell/>  */}
  </Provider>,
  document.getElementById("root")
);
