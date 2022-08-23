import React from "react";
import SignupComp from "../components/Signup";
import { useRouter } from "next/router";

// functions
import { useInputHook } from "../hooks/hooks";
import { createNewUser } from "../components/store/firebase";
// react query
import { useMutation } from "@tanstack/react-query";

const Signup = () => {
  const router = useRouter();
  const [signupData, setSignupData] = useInputHook();

  // mutation function
  const { data, isloading, mutate } = useMutation(
    () => createNewUser(signupData.email, signupData.password),
    {
      onSuccess: (response) => {
        console.log("succesful log in", response);
        // the response is undefined, was hoping thes response would be the new auth thats returned
        router.push("/");
      },
    }
  );

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(signupData);
    if (signupData.email && signupData.password) {
      mutate();
    }
  };

  return (
    <div>
      <SignupComp
        setSignupData={setSignupData}
        onSubmitHandler={onSubmitHandler}
      />
    </div>
  );
};

export default Signup;
