import React from "react";
import styles from "../../src/Views/Sell.module.css";
import {
  Switch,
  Link,
  BrowserRouter as Router,
} from "react-router-dom";

const Sell = (props) => {
  return (
    <Switch>
      <div className={styles.Canvas}>
        <div className={styles.Container}>
          <div className={styles.SellDiv}>
            <h2>Comprar</h2>
            <label>Nome</label>
            <input />
            <label>Quantidade</label>
            <input />
            <label>Preço</label>
            <input />
            <label>Total</label>
            <input />
            <button>Adicionar ao carrinho</button>
            <Link to="/">
              <button>Retornar ao menu Principal</button>
            </Link>
          </div>
          <div className={styles.Cart}>
            <h2>Carrinho</h2>
            <label>
              Nome <span>Quantidade</span> <span>Estoque</span>{" "}
              <span>Preço</span>
            </label>
            <label>
              Total<span>0</span>
            </label>
            <Link to="/ConfirmSell">
              <button>Finalizar</button>
            </Link>
          </div>
        </div>
      </div>
    </Switch>
  );
};

export default Sell;
