import Footer from "../Footer";
import Header from "../Header";
import React from "react";

const AppShell = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default AppShell;
