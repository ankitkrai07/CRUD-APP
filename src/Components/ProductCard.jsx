import React from "react";

export const ProductCard = ({
  name,
  image,
  brand,
  price,
  category,
  gender,
}) => {
  return (
    <div>
      <img src={image} alt="Product-image" />
      <h3>{name}</h3>
      <h3>Price:{price}</h3>
      <p>Brand:{brand}</p>
      <p>Catergory:{category}</p>
      <p>Gender:{gender}</p>
    </div>
  );
};
