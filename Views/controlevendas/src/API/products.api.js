import axios from "axios";

//URL para a api de produtos
const url = "http://localhost:5000/products";

//Funções que vão fazer a comunicação entre a api e as views com os verbos get, post, patch e delete
export const requestProducts = () => axios.get(url);
export const requestProducts = () => axios.get(url);


