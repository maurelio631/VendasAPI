import React from "react";
import styles from "./ConfirmSell.module.css";
import {
  Switch,
  Link,
  useHistory,
  BrowserRouter as Router,
} from "react-router-dom";

const ConfirmSell = () => {
  return (
    <Switch>
      <div className={styles.Canvas}>
        <div className={styles.Container}>
          <h2>Seu pedido foi realizado com sucesso!</h2>
          <Link to="/">
            <button>Voltar ao menu principal</button>
          </Link>
        </div>
      </div>
    </Switch>
  );
};
export default ConfirmSell;
