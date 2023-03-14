import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <Link href="#" className="nav__logo">
          Gmail Checker
        </Link>
        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">
            <li className="nav__item">
              <Link href="" className="nav__link">
                <i className="uil uil-usd-square nav__icon"></i>Price
              </Link>
            </li>
            <li className="nav__item">
              <Link href="" className="nav__link">
                <i className="uil uil-mobile-android nav__icon"></i>Contact
              </Link>
            </li>
            <li className="nav__item ">
              <Link href="" className="nav__link login">
                <i className="uil uil-signin nav__icon "></i>Login
              </Link>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => {
              setToggle(!toggle);
            }}
          ></i>
        </div>
        <div className="nav__btns">
          <div
            className="nav__toggle"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
