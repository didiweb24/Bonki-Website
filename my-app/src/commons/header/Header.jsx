import Search from "./Search";
import "./Header.css";
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
