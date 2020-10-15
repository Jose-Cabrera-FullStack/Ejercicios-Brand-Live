import React from "react";

import "../assets/styles/components/Header.scss";
import Logo from "../assets/static/images/img/Logo-Pufi.svg";
import Cart from "../assets/static/images/img/Pufi-cart.svg";
import Nap from "../assets/static/images/img/Pufi-nap.svg";
import Puff from "../assets/static/images/img/Pufi-puff.svg";
import Rain from "../assets/static/images/img/Pufi-rain.svg";
import Arrow from "../assets/static/images/img/arrow-down.svg";
import Hamburger from "../assets/static/images/img/mobile-Hamburger.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header_inside">
        <div className="header_inside_logo">
          <img src={Logo} alt="Logo de Pufi" />
        </div>
        <div className="header_pufi_menu">
          <div>
            <img src={Puff} alt="PUFI PUFF" />
            <p>PUFI PUFF</p>
          </div>
          <div>
            <img src={Rain} alt="PUFI RAIN" />
            <p>PUFI RAIN</p>
          </div>
          <div>
            <img src={Cart} alt="PUFI CART" />
            <p>PUFI CART</p>
          </div>
          <div>
            <img src={Nap} alt="PUFI NAP" />
            <p>PUFI NAP</p>
          </div>
        </div>
        <div className="header_my_info">
          <div className="header_my_info_profile">
            <p>MI CUENTA</p>
            <img src={Arrow} alt="Flecha hacia abajo" />
          </div>
          <div>
            <p>MI COMPRA</p>
          </div>
        </div>
        <div className="header_mobile">
          <img src={Hamburger} alt="Menu Hamburguesa" />
        </div>
      </div>
    </header>
  );
};

export default Header;
