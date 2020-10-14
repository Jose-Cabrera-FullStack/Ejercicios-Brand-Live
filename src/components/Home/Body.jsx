import React from "react";

import Button from "../Utils/Buttons";
import Umbrella from "../../assets/static/images/img/umbrella-tiny.png";
import "../../assets/styles/components/Body.scss";

const Body = (props) => {
  return (
    <div className="body">
      <div className="body_inside">
        <div className="body_inside_left body_inside_left-photo-1">
          <Button />
        </div>
        <div className="body_inside_right">
          <div className="body_inside_items">
            <img src={Umbrella} alt="Sombrilla color Naranja" />
            <h3>Puri RAIN</h3>
            <hr />
            <p>Descrición del producto. Este es un texto simulado</p>
            <div>
              <img src="" alt="Flecha a la derecha" />
              <h5>VER MÁS</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
