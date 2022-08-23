import React from "react";
import Navbar from "./Navbar";

import { useAuthQueryHook } from "../store/reactQueryHook";

const Layout = ({ children }) => {
  const { data: authData, isLoading } = useAuthQueryHook();
  return (
    <div>
      <Navbar />

      {children}
    </div>
  );
};

export default Layout;
