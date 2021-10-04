import React from "react";
import styles from "../Views/SelectFunctionScreen.module.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const SelectFunctionScreen = (props) => {
  return (
    <Switch>
      <div className={styles.Canvas}>
        <div className={styles.Container}>
          <h2>Selecione a função desejada</h2>
          <Link to="/controlProducts">
            <button>Cadastrar/Editar Produto</button>
          </Link>
          <Link to="/Sell">
            <button>Iniciar Expediente</button>
          </Link>
        </div>
      </div>
    </Switch>
  );
};

export default SelectFunctionScreen;
