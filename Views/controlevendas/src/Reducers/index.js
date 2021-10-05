import { combineReducers } from "redux";
//Todas as ações do reducer dos produtos se concentram aqui 
import products from "./products.reducer";
//CombineReducers faz o papel de expor os reducers para que sejam utilizados na view
export default combineReducers({ products });
