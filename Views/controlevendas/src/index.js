import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SelectFunctionScreen from "../src/Views/SelectFunctionScreen.js";
import ControlProducts from "../src/Views/ControlProducts.js";
import ProductConfirmation from "../src/Views/ProductConfirmation.js"
import ProductsList from "./Views/ProductsList";
import Sell from "./Views/Sell";
import ConfirmSell from "./Views/ConfirmSell";
ReactDOM.render(
  <React.StrictMode>
    {/* <SelectFunctionScreen /> */}
    {/* <ControlProducts /> */}
    {/* <ProductConfirmation/> */}
    {/* <ProductsList/> */}
    {/* <Sell/> */}
    <ConfirmSell/>
  </React.StrictMode>,
  document.getElementById("root")
);
