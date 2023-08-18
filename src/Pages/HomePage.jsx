import React from "react";
import { ProductList } from "../Components/ProductList";
import { Navbar } from "../Components/Navbar";

export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <ProductList />
    </div>
  );
};
