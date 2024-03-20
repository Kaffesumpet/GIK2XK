import axios from "./api";

export async function getAll(endpoint = "/products") {
  try {
    const response = await axios.get(endpoint);

    if (response.status === 200) return response.data;
    else {
      console.log(response);
      return [];
    }
  } catch (e) {
    e?.response ? console.log(e.response.data) : console.log(e);
  }
}

export async function getById(productId) {
  try {
    const response = await axios.get(`/products/${productId}`);
    if (response.status === 200) return response.data;
    else {
      console.log(response.data);
      return null;
    }
  } catch (e) {
    e?.response ? console.log(e.response.data) : console.log(e);
  }
}

export async function create(product) {
  try {
    const response = await axios.post("/products", product);
    if (response.status === 200) return response.data;
    else {
      console.log(response.data);
      return null;
    }
  } catch (e) {
    e?.response ? console.log(e.response.data) : console.log(e);
  }
}

export async function update(product) {
  try {
    const response = await axios.put("/products", product);
    if (response.status === 200) return response.data;
    else {
      console.log(response.data);
      return null;
    }
  } catch (e) {
    e?.response ? console.log(e.response.data) : console.log(e);
  }
}

export async function remove(productId) {
  try {
    const response = await axios.delete("/products", { data: { productId } });
    if (response.status === 200) return response.data;
    else {
      console.log(response.data);
      return null;
    }
  } catch (e) {
    e?.response ? console.log(e.response.data) : console.log(e);
  }
}

export async function addToCart(productId, userId, amount) {
  console.log("ProductService Frontend Response", userId, productId, amount)
  try {
      const response = await axios.post(`/products/${productId}/addToCart`, { userId, amount});
      if(response.status === 200) return response.data;
      else {
          console.log(response.data);
          return null;
      }
  } catch (e) { 
      e?.response ? console.log(e.response.data) : console.log(e);
  }
}


export async function removeFromCart(productId, userId, amount) {
  try {
      const response = await axios.delete(`/products/${productId}/removeFromCart`, { data: {userId, amount} });
      if(response.status === 200) return response.data;
      else { 
          console.log(response.data);
          return null;
      }
  } catch (e) {
      e?.response ? console.log(e.response.data) : console.log(e);
  }
}