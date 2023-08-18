import React from "react";
import { ProductList } from "../Components/ProductList";
import { Navbar } from "../Components/Navbar";
import { Sidebar } from "../Components/Sidebar";
import { styled } from "styled-components";

export const HomePage = () => {
  return (
    <WRAPPER>
      {/* <Navbar />*/}
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="product-list">
        <ProductList />
      </div>
    </WRAPPER>
  );
};

const WRAPPER = styled.div`
  display: flex;
  margin-top: 10px;
  /* gap: 5px; */

  .sidebar {
    width: 15%;
  }

  .product-list {
    width: 82.5%;
    padding-left: 1%;
  }
`;
