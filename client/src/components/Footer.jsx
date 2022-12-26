import React from "react";
import Logo from "../img/logo.svg";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        Made with ♥️ for <b>Vasilev</b>
      </span>
    </footer>
  );
};

export default Footer;
