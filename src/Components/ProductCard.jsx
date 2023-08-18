import React from "react";
import { styled } from "styled-components";

export const ProductCard = ({
  name,
  image,
  brand,
  price,
  category,
  gender,
}) => {
  return (
    <PRODUCTWRAPPER>
      <img src={image} alt="Product-image" />
      <h3>{name}</h3>
      <h3>Price:{price}</h3>
      <p>Brand:{brand}</p>
      <p>Catergory:{category}</p>
      <p>Gender:{gender}</p>
    </PRODUCTWRAPPER>
  );
};

const PRODUCTWRAPPER = styled.div`
  border: 1px solid gray;
  border-radius: 20px;
  overflow: hidden;

  img {
    width: 100%;
    height: 300px;
  }
`;
