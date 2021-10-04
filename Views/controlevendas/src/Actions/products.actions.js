import * as api from "../API/products.api";

export const getProducts = () => async (dispatch) => {
  try {
      const {data} = await api.requestProducts();
      dispatch({type: "FETCH_ALL", payload: data});
  } catch (error) {
      console.log(error.message);
  }

};
