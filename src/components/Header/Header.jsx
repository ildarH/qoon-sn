import React from "react";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <img
        className={style.headerLogoImg}
        src="img/logo_racoon.png"
        alt="logo"
      />
      <span className={style.headerLogoText}>Qoon</span>
    </header>
  );
};

export default Header;
