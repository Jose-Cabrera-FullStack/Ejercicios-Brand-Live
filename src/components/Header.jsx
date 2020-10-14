import React from "react";

import "../assets/styles/components/Header.scss";

const Header = (props) => {
  return (
    <header className="header">
      <div className="header_inside">
        <div>
          <img src="" alt="Logo de Pufi" />
        </div>
        <div className="header_pufi_menu">
          <div>
            <img src="" alt="PUFI PUFF" />
            <p>PUFI PUFF</p>
          </div>
          .
          <div>
            <img src="" alt="PUFI RAIN" />
            <p>PUFI RAIN</p>
          </div>
          <div>
            <img src="" alt="PUFI CART" />
            <p>PUFI CART</p>
          </div>
          <div>
            <img src="" alt="PUFI NAP" />
            <p>PUFI NAP</p>
          </div>
        </div>
        <div className="header_my_info">
          <div>
            <p>MI CUENTA</p>
            <img src="" alt="Flecha hacia abajo" />
          </div>
          <div>
            <p>MI COMPRA</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
