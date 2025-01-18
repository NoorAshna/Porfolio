import React from "react";
import headerImg from "../assets/header.png";
const Header = () => {
  return (
    <header>
      <img src={headerImg} alt="header image" className="w-100  border border-secondary"/>

    </header>
  );
}

export default Header;