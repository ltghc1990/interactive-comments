import React, { useState } from "react";
import LoginCard from "../components/Login";

// test
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { useSignInHook } from "../components/store/reactQueryHook";
const Login = () => {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });

  const { data, isloading, mutate } = useSignInHook();

  const onChangeHandler = (e) => {
    console.log(e.target.id, ":", e.target.value);
    setLoginInfo({ ...loginInfo, [e.target.id]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    mutate(loginInfo);

    if (loginInfo.email.length < 1 || loginInfo.password.length < 6) {
      return;
    } else {
      // add to firebase auth
      // error if occurs
    }
  };
  return (
    <LoginCard
      onChangeHandler={onChangeHandler}
      onSubmitHandler={onSubmitHandler}
    />
  );
};

export default Login;

// notes

// someone can still go to the login page thru the url even tho they are signed in
