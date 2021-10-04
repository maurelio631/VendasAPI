import React from "react";
import styles from "../Views/SelectFunctionScreen.module.css";

const SelectFunctionScreen = (props) => {
  return (
    <div className={styles.Canvas}>
      <div className={styles.Container}>
          <h2>Selecione a função desejada</h2>
              <button>Cadastrar/Editar Produto</button>
              <button>Iniciar Expediente</button>
      </div>
    </div>
  );
};

export default SelectFunctionScreen;