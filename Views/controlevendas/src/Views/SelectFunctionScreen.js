import React from "react";
import "../Views/SelectFunctionScreen.css";

const SelectFunctionScreen = (props) => {
  return (
    <div className="Canvas">
      <div className="Container">
          <h2>Selecione a função desejada</h2>
              <button>Cadastrar/Editar Produto</button>
              <button>Iniciar Expediente</button>
      </div>
    </div>
  );
};

export default SelectFunctionScreen;