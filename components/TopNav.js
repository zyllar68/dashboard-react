import { useState } from "react";
import Image from "next/image";
import Logo from "@assets/logo.svg";
import cx from "classnames";

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);

  const toggleBurger = () => {
    setBurgerStatus(!burgerStatus);
  };

  return (
    <header
      className={cx("header", {
        open: burgerStatus,
      })}
    >
      <div
        className={cx("overlay", {
          "fade-in": burgerStatus,
          "fade-out": !burgerStatus,
        })}
      ></div>
      <nav className='container container--pall'>
        <a href='#' className='header__logo'>
          <Image src={Logo} priority alt='logo' />
        </a>
        <a
          href='#'
          className='header__toggle hide-for-desktop'
          onClick={toggleBurger}
        >
          <span></span>
          <span></span>
          <span></span>
        </a>

        <div className='header__links hide-for-mobile'>
          <a href='#'>Home</a>
          <a href='#'>About</a>
          <a href='#'>Contact</a>
          <a href='#'>Blog</a>
          <a href='#'>Careers</a>
        </div>

        <a href='#' className='button header__cta hide-for-mobile'>
          Request Invite
        </a>
      </nav>

      <div
        className={cx("header__menu has-fade", {
          "fade-in": burgerStatus,
          "fade-out": !burgerStatus,
        })}
      >
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Contact</a>
        <a href='#'>Blog</a>
        <a href='#'>Careers</a>
      </div>
    </header>
  );
};

export default Header;
