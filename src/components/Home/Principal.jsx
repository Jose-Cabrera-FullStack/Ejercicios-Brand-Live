import React from "react";
import Slider from "@farbenmeer/react-spring-slider";

import Button from "../Utils/Buttons";
import "../../assets/styles/components/Principal.scss";

const Principal = () => {
  const BulletComponent = ({ onClick, isActive }) => (
    <li
      style={{
        width: "10px",
        height: "10px",
        backgroundColor: "white",
        margin: "0 5px",
        borderRadius: "50%",
        boxShadow: isActive && "0 0 0 2px #ff0000a6, 0 0 0 3px #ffffff",
      }}
      onClick={onClick}
    />
  );
  return (
    <div className="principal">
      <div className="principal_inside">
        <div className="principal_absolute_item">
          <h1 className="principal_title">
            ESTÁR CÓMODO, NUNCA FUE TAN FÁCIL.
          </h1>
          <div className="principal_absolute_button">
            <Button />
          </div>
        </div>
        <Slider hasBullets BulletComponent={BulletComponent} auto={3000}>
          <span className="principal_inside"></span>
          <span className="principal_inside"></span>
          <span className="principal_inside"></span>
        </Slider>
      </div>
    </div>
  );
};

export default Principal;
