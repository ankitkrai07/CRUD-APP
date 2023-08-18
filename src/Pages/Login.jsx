import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { login } from "../Redux/Authentication/action";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isAuth, isError } = useSelector((store) => {
    return {
      isAuth: store.authReducer.isAuth,
      isError: store.authReducer.isError,
      errorMessage: store.authReducer.errorMessage,
    };
  }, shallowEqual);

  const handleLogin = () => {
    const userData = {
      email,
      password,
    };
    // console.log(userData);
    dispatch(login(userData));
  };

  return (
    <DIV auth={isAuth.toSting} err={isError.toStrin}>
      <h2>{isAuth ? "Login Sucessfull" : "Login to continue"}</h2>
      {/* <h3>{isError && errorMessage}</h3> */}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleLogin}>Login</button>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    color: ${({ auth }) => (auth === "true" ? "green" : "red")};
  }

  input {
    height: 40px;
    font-size: larger;
    border: ${({ err }) =>
      err === "true" ? "1px solid red" : "1px solid gray"};
  }

  button {
    height: 35px;
    border: none;
  }
`;
