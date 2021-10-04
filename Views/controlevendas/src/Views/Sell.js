import React from "react";
import styles from "../../src/Views/Sell.module.css";

const Sell = (props) => {
  return (
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
        </div>
        <div className={styles.Cart}>
          <h2>Carrinho</h2>
          <label>
            Nome <span>Quantidade</span> <span>Estoque</span> <span>Preço</span>
          </label>
          <label>
            Total<span>0</span>
          </label>
          <button>Finalizar</button>
        </div>
      </div>
    </div>
  );
};

export default Sell;
