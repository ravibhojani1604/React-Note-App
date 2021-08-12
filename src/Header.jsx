import React from "react";
import Logo from "./images/logo.png";

function Header() {
  return (
    <>
      <div className="header">
        <div className="image">
          <img src={Logo} alt="logo" />
        </div>
        <h1>Google Clone</h1>
      </div>
    </>
  );
}

export default Header;
