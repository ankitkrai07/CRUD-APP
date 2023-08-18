import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

export const Sidebar = () => {
  const [gender, setGender] = useState([]);

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

  useEffect(() => {
    console.log(gender);
  }, [gender]);

  return (
    <DIV>
      <h3>Filter by Gender</h3>
      <div>
        <input type="checkbox" value={"male"} onChange={handleGender} />
        <label>Men</label>
      </div>
      <div>
        <input type="checkbox" value={"female"} onChange={handleGender} />
        <label>Women</label>
      </div>
      <div>
        <input type="checkbox" value={"kids"} onChange={handleGender} />
        <label>Kids</label>
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
