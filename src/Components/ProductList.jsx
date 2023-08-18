import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/Products/action";
// import { store } from "../Redux/store";
import { ProductCard } from "./ProductCard";
import { store } from "../Redux/store";
import { styled } from "styled-components";

export const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.productsReducer.products);
  //   console.log(products);

  useEffect(() => {
    dispatch(getProducts);
  }, []);

  return (
    <DIV>
      {products.map((el) => {
        return <ProductCard key={el.id} {...el} />;
      })}
    </DIV>
  );
};

const DIV = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 20px;
`;
