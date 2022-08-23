import { createContext } from "react";

export const FirebaseContext = createContext();

const FirebaseProvider = ({ children }) => {
  return <FirebaseContext.Provider>{children}</FirebaseContext.Provider>;
};
