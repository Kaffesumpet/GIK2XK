import axios from "./api";

export async function createRating(productData, rating) {
  console.log(productData, rating);
  try {
    const response = await axios.post(`/ratings`, {
      productProductId: productData.productId,
      rating: rating,
    });
    if (response.status === 200) return response.data;
    else {
      console.log(response.data);
      return null;
    }
  } catch (e) {
    e?.response ? console.log(e.response.data) : console.log(e);
  }
}
