import React from "react";

import "../../../assets/styles/components/Subscribe.scss";
import Arrow from "../../../assets/static/images/img/arrow-right.svg";

const Form = () => {
  return (
    <form action="" className="subscribe_form">
      <input placeholder="ingresa tu mail" type="text" />
      <img src={Arrow} alt="Flecha a la derecha" />
    </form>
  );
};

export default Form;
