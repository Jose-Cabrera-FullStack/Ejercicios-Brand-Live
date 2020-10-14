import React from "react";
import Slider from "@farbenmeer/react-spring-slider";

import Button from "../Utils/Buttons";
import "../../assets/styles/components/Principal.scss";

const Principal = (props) => {
  return (
    <div className="principal">
      <div className="principal_inside">
        <div className="principal_absolute_item">
          <h1 className="principal_title">
            ESTÁR CÓMODO, NUNCA FUE TAN FÁCIL.
          </h1>
          <Button />
        </div>
        <Slider hasBullets>
          <span className="principal_inside"></span>
          <span className="principal_inside"></span>
          <span className="principal_inside"></span>
        </Slider>
      </div>
    </div>
  );
};

export default Principal;
