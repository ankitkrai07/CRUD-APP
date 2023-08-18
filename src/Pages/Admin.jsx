import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addProduct } from "../Redux/Products/action";

const initialState = {
  name: "",
  image: "",
  brand: "",
  price: 0,
  category: "",
  gender: "",
};

export const Admin = () => {
  const [data, setData] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    // console.log(name, value);
    setData((prev) => {
      return { ...prev, [name]: name === "price" ? +value : value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //   console.log(data);
    dispatch(addProduct(data));
    setData(initialState);
  };

  return (
    <DIV>
      <form onSubmit={handleSubmit}>
        <h1>Add Product</h1>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={data.name}
        />
        <input
          type="text"
          name="image"
          placeholder="Image"
          onChange={handleChange}
          value={data.image}
        />
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          onChange={handleChange}
          value={data.brand}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          onChange={handleChange}
          value={data.price}
        />
        <select name="gender" onChange={handleChange} value={data.gender}>
          <option value="">Select Gender</option>
          <option value="male">Men</option>
          <option value="female">Women</option>
          <option value="kids">Kids</option>
        </select>
        <select name="category" onChange={handleChange} value={data.category}>
          <option value="">Select Category</option>
          <option value="top-wear">Top Wear</option>
          <option value="bottom-wear">Bottom Wear</option>
          <option value="foot-wear">Foot Wear</option>
        </select>
        <button type="submit">Add Product</button>
      </form>
    </DIV>
  );
};

const DIV = styled.div`
  // CSS file with some extra benefits

  width: 400px;
  margin: auto;
  border: 1px solid gray;
  padding: 40px;

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }

  input,
  select {
    height: 40px;
    width: 100%;
    font-size: larger;
  }
  button {
    width: 50%;
    height: 35px;
    border: none;
    cursor: pointer;
  }
`;
