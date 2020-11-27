import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={style.header}>
      <img
        className={style.headerLogoImg}
        src="img/logo_racoon.png"
        alt="logo"
      />
      <span className={style.headerLogoText}>Qoon</span>
      <div className={style.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  isAuth: PropTypes.bool,
  login: PropTypes.string,
};
