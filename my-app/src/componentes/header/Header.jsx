import Search from "./Search";
import React from "react";
import Head from "./Head";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <Head />
      <Navbar />
      <Search />
    </>
  );
};

export default Header;
