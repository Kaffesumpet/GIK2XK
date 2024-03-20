import axios from "./api";

export async function getById(cartId) {
  try {
      const response = await axios.get(`/carts/${cartId}`);
      if(response.status === 200) return response.data;
      else {
          console.log(response.data);
          return null;
      }
  } catch (e) {
      e?.response ? console.log(e.response.data) : console.log(e);
  }
}


export async function getAll() {
  try {
    const response = await axios.get("/carts");
    if (response.status === 200) return response.data;
    else {
      console.log(response);
      return [];
    }
  } catch (e) {
    e?.response ? console.group(e.response.data) : console.log(e);
  }
}

