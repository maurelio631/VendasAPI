import * as api from "../API/products.api";

//Aqui vão os verbos com os tipos de requisições posiveis para o backend: Get, Post, Update, Delete
//Porém ao contrario da controler, esse arquivo trata das requisições que vem do backend.
export const getProducts = () => async (dispatch) => {
  try {
      const {data} = await api.requestProducts();
      dispatch({type: "FETCH_ALL", payload: data});
  } catch (error) {
      console.log(error.message);
  }

};
