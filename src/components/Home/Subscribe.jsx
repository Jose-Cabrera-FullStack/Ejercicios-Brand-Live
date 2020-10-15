import React from "react";

import "../../assets/styles/components/Subscribe.scss";
import Form from "./Subscribe/Form";

const Subscribe = (props) => {
  return (
    <div className="subscribe">
      <h5>NEWSLETTTER</h5>
      <h2>SUSCRIBITE</h2>
      <p>Y enterate de todas las novedades</p>
      <Form />
    </div>
  );
};

export default Subscribe;
