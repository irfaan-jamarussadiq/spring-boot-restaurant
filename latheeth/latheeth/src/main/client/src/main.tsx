import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Menu from "./menu/Menu.tsx";
import NavBar from "./NavBar.tsx";
import NotFound from "./NotFound.tsx";
import Order from "./order/Order.tsx";
import OrderCheckout from "./order/OrderCheckout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },  
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "/checkout",
    element: <OrderCheckout />,
  },  
  {
    path: "*",
    element: <NotFound />,
  }
]);

const links = [
  { 
    path: "/", 
    name: "Home", 
  },
  { 
    path: "/menu", 
    name: "Menu",
  },
  {
    path: "/order",
    name: "Order",
  },  
  { 
    path: "/reservations", 
    name: "Reservations",
  },
];
 
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NavBar links={links} />
    <RouterProvider router={router} />
  </React.StrictMode>
);