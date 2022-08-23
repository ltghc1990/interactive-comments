import { useState } from "react";
export const useInputHook = () => {
  const [inputData, setInputData] = useState({});

  const onChangeHandler = (e) => {
    console.log(e.target.id, e.target.value);
    setInputData({ ...inputData, [e.target.id]: e.target.value });
  };

  return [inputData, onChangeHandler];
};

// not sure why i made this lol since onchange isnt need in signup
