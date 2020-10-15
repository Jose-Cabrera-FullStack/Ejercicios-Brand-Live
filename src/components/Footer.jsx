import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/components/Footer.scss";

const year = new Date().getFullYear();

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="footer_inside">
        <div>
          <img src="" alt="Logo de PUFI" />
        </div>
        <div>
          <ul>
            <li>PUFI RAIN</li>
            <li>PUFI PUFF</li>
            <li>PUFI CART</li>
            <li>PUFI NAP</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>CONTACTO</li>
            <li>AYUDA</li>
            <li>CÓMO COMPRAR</li>
            <li>TÉRMINOS & CONDICIONES</li>
          </ul>
        </div>
        <div>
          <h5>COMPRA 100% SEGURA</h5>
          <div>
            <img src="" alt="Codigo QR" />
            <img src="" alt="Ícono de seguridad" />
            <p>COMPRÁ CON LA GARANTÍA DE PUFI</p>
          </div>
        </div>
        <div>
          <p>SEGUINOS EN</p>
          <img src="" alt="Ícono de Facebook" />
          <img src="" alt="Ícono de Twitter" />
          <img src="" alt="Ícono de Instagram" />
        </div>
      </div>
      <div className="footer_under_data">
        <div>
          <p> PUFI Copyright 2017 - Todos los derechos reservados</p>
        </div>
        <div>
          <img src="" alt="Logo de BRAND LIVE" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
