import ProductItemSmall from "./ProduktItemSmall";
import { getAll } from "../services/ProductService";
import { useEffect, useState } from "react";

function ProductList({ pathname }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAll().then((products) => {
      products.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setProducts(products);
    });
  }, [pathname]);

  return (
    <ul>
      {products?.length > 0 ? (
        products.map((product) => (
          <li key={`products_${product.productId}`}>
            <ProductItemSmall product={product} />
          </li>
        ))
      ) : (
        <h3>Could not fetch products </h3>
      )}
    </ul>
  );
}

export default ProductList;
