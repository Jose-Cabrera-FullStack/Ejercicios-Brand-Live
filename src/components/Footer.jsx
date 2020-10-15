import React from "react";

import "../assets/styles/components/Footer.scss";
import Logo from "../assets/static/images/img/Logo-Pufi-black.svg";
import QR from "../assets/static/images/img/QR.png";
import Shield from "../assets/static/images/img/Shield.png";
import Facebook from "../assets/static/images/img/Facebook.svg";
import Instagram from "../assets/static/images/img/Instagram.svg";
import Twitter from "../assets/static/images/img/Twitter.svg";
import LogoBrandLive from "../assets/static/images/img/Logo-Brand-Live.svg";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_gradient"></div>
      <div className="footer_inside">
        <div className="footer_inside_logo">
          <img src={Logo} alt="Logo de PUFI" />
        </div>
        <div>
          <ul>
            <li>
              <p> PUFI RAIN</p>
            </li>
            <li>
              <p> PUFI PUFF</p>
            </li>
            <li>
              <p> PUFI CART</p>
            </li>
            <li>
              <p> PUFI NAP</p>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <p> CONTACTO</p>
            </li>
            <li>
              <p> AYUDA</p>
            </li>
            <li>
              <p> CÓMO COMPRAR</p>
            </li>
            <li>
              <p> TÉRMINOS & CONDICIONES</p>
            </li>
          </ul>
        </div>
        <div className="footer_inside_security">
          <h5>COMPRA 100% SEGURA</h5>
          <div>
            <img src={QR} alt="Codigo QR" />
            <img
              className="footer_inside_security_shield"
              src={Shield}
              alt="Ícono de seguridad"
            />
            <p>COMPRÁ CON LA GARANTÍA DE PUFI</p>
          </div>
        </div>
        <div className="footer_inside_socials">
          <p>SEGUINOS EN</p>
          <div>
            <img src={Facebook} alt="Ícono de Facebook" />
            <img src={Twitter} alt="Ícono de Twitter" />
            <img src={Instagram} alt="Ícono de Instagram" />
          </div>
        </div>
      </div>
      <div className="footer_under_data">
        <div>
          <p> PUFI Copyright {year} - Todos los derechos reservados</p>
        </div>
        <div>
          <img src={LogoBrandLive} alt="Logo de BRAND LIVE" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
