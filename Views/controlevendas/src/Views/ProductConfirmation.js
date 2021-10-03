import React from "react";
import "./ProductConfirmation.css";
const ProductConfirmation = (props) => {
  return (
    <div className="Canvas">
      <div className="Container">
        <h2>Produto cadastrado com sucesso!</h2>
        <p>Nome do produto</p>
        <button>Ver lista de produtos</button>
      </div>
    </div>
  );
};
export default ProductConfirmation;