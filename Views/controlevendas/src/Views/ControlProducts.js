import { useState, React } from "react";
import styles from "./ControlProducts.module.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useHistory,
} from "react-router-dom";

const ControlProducts = (props) => {
  const history = useHistory();

  return (
    <Switch>
      <div className={styles.Canvas}>
        <div className={styles.Container}>
          <h2>Cadastrar/Editar Produto</h2>
          <label>Nome do Produto</label>
          <input />
          <label>Descrição</label>
          <textarea />
          <label>Quantidade</label>
          <input type="number" defaultValue="1" />
          <label>Preço</label>
          <input type="number" />
          <button onClick={() => history.goBack()}>Cancelar</button>
          <button>Confirmar</button>
          <Link to="/ProductsList">
            <button>Ver Lista de produtos</button>
          </Link>
        </div>
      </div>
    </Switch>
  );
};

export default ControlProducts;
