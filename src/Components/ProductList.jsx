import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/Products/action";
import { ProductCard } from "./ProductCard";
import { store } from "../Redux/store";
import { styled } from "styled-components";
import { useSearchParams } from "react-router-dom";

export const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.productsReducer.products);
  const [searchParams] = useSearchParams();
  //   console.log(searchParams.getAll("gender"));
  //   console.log(products);

  let paramObj = {
    params: {
      gender: searchParams.getAll("gender"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
    },
  };

  useEffect(() => {
    dispatch(getProducts(paramObj));
  }, [searchParams]);

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
