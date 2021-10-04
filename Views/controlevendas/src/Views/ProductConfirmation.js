import React from "react";
import styles from "./ProductConfirmation.module.css";

const ProductConfirmation = (props) => {
  return (
    <div className={styles.Canvas}>
      <div className={styles.Container}>
        <h2>Produto cadastrado com sucesso!</h2>
        <p>Nome do produto</p>
        <button>Ver lista de produtos</button>
      </div>
    </div>
  );
};
export default ProductConfirmation;