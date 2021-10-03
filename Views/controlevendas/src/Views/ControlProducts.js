import React from "react";
import "./ControlProducts.css";

const ControlProducts = (props) => {
  return (
    <div className="Canvas">
      <div className="Container">
        <h2>Cadastrar/Editar Produto</h2>
        <label>Nome do Produto</label>
        <input/>
        <label>Descrição</label>
        <textarea/>
        <label>Quantidade</label>
        <input type="number" defaultValue="1"/>
        <label>Preço</label>
        <input type="number"/>
        <button>Cancelar</button>
        <button>Confirmar</button>
      </div>
    </div>
  );
};

export default ControlProducts;
