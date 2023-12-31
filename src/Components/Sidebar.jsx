import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { styled } from "styled-components";

export const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [gender, setGender] = useState(searchParams.getAll("gender") || []);
  const [order, setOrder] = useState(searchParams.get("order") || "");

  //   console.log(searchParams.getAll("gender"));

  const handleGender = (e) => {
    const { value } = e.target;
    let newGenderData = [...gender];
    // console.log(value);
    // setGender((prev) => [...prev, value]);
    if (newGenderData.includes(value)) {
      newGenderData = newGenderData.filter((el) => el !== value);
    } else {
      newGenderData.push(value);
    }
    setGender(newGenderData);
  };

  const handleOrder = (e) => {
    const { value } = e.target;
    // console.log(value);
    setOrder(value);
  };

  useEffect(() => {
    // console.log(gender);
    let params = {
      gender,
    };

    order && (params.order = order);

    setSearchParams(params);
  }, [gender, order]);

  return (
    <DIV>
      <h3>Filter by Gender</h3>
      <div>
        <input
          type="checkbox"
          value={"male"}
          onChange={handleGender}
          checked={gender.includes("male")}
        />
        <label>Men</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"female"}
          onChange={handleGender}
          checked={gender.includes("female")}
        />
        <label>Women</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"kids"}
          onChange={handleGender}
          checked={gender.includes("kids")}
        />
        <label>Kids</label>
      </div>
      <h3>Sort by Price</h3>
      <div onChange={handleOrder}>
        <input
          type="radio"
          name="order"
          value={"asc"}
          defaultChecked={order === "asc"}
        />
        <label>Low To High</label>
        <br />
        <input
          type="radio"
          name="order"
          value={"desc"}
          defaultChecked={order === "desc"}
        />
        <label>High To Low</label>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  padding-left: 10px;
  height: 100vh;
  border-right: 1px solid gray;
  flex-direction: column;
  align-items: baseline;
`;

// male, female, kids
// selects male
