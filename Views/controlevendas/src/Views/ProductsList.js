import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../Actions/products.actions";
import { useSelector } from "react-redux";
import {
  Switch,
  Link,
  useHistory,
  BrowserRouter as Router,
} from "react-router-dom";
import styles from "./ProductsList.module.css";

const ProductsList = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.products);
  console.log(products);

  const ListedProducts = products.map((product) => {
    <p key={product.toString()}> {product}</p>;
  });

  const history = useHistory();

  return (
    <Switch>
      <div className={styles.Canvas}>
        <div className={styles.Container}>
          <h2>Estoque</h2>

          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Quantidade</th>
                <th>Preço</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => {
                return (
                  <tr>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.amount}</td>
                    <td>{product.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div></div>
          <Link to="/Sell">
            <button>Começar Expediente</button>
          </Link>
            <button onClick={() => history.goBack()}>Voltar</button>
        </div>
      </div>
    </Switch>
  );
};
export default ProductsList;
