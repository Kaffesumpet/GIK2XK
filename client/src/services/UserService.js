import axios from "./api";

export async function getById(userId) {
  try {
      const response = await axios.get(`/users/${userId}`);
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
    const response = await axios.get("/users");
    if (response.status === 200) return response.data;
    else {
      console.log(response);
      return [];
    }
  } catch (e) {
    e?.response ? console.group(e.response.data) : console.log(e);
  }
}

export async function getCart(userId) {
  try {
      const response = await axios.get(`/users/${userId}/getCart`);
      if(response.status === 200) return response.data;
      else {
          console.log(response.data);
          return null;
      } 
  } catch (e) {
  e?.response ? console.log(e.response.data) : console.log(e);
  }
}
