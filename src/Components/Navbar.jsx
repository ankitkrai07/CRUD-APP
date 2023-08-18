import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Navbar = () => {
  return (
    <DIV>
      <h1>Product List</h1>
      <Link to={"/"}>Home</Link>
      <Link to={"/login"}>Log In</Link>
      <Link to={"/admin"}>Add Product</Link>
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  background-color: gray;
`;
