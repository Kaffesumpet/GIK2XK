import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ProductEdit from "./views/ProductEdit.jsx";
import ProductDetail from "./views/ProductDetail.jsx";
import Home from "./views/Home.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CssBaseline } from "@mui/material";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:productId/edit",
        element: <ProductEdit />,
      },
      {
        path: "/products/:productId/addToCart",
        element: <ProductDetail />,
      },
      {
        path: "/products/:productId/addRating",
        element: <ProductDetail />,
      },
      {
        path: "/products/:productId",
        element: <ProductDetail />,
      },
      {
        path: "/products/new",
        element: <ProductEdit />,
      },
      {
        path: "/ratings",
        element: <ProductEdit />,
      },
      {
        path: "/products/:productId/getAllRatings",
        element: <ProductDetail />,
      },
      {
        path: "/products/:productId/addToCart",
        element: <ProductDetail />,
      },
      {
        path: "/products/:productId/removeFromCart",
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: "/users/:userId/getCart",
    element: <App />,
  },
  {
    path: "/users/",
    element: <App />,
  },
  {
    path: "/users/:userId",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <RouterProvider router={router} />
  </React.StrictMode>
);
