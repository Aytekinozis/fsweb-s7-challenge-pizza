import React from "react";
import "./Header.css";
import logo from "../Assets/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <div className="logo">
        <img src={logo} />
      </div>
      <Link className="aciktim-link btn btn-warning" to="/">
        Ana Sayfa
      </Link>
    </div>
  );
};
export default Header;
