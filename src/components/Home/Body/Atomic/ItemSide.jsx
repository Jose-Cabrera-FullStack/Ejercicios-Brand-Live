import React from "react";

import Umbrella from "../../../../assets/static/images/img/umbrella-tiny.png";
import "../../../../assets/styles/components/Body.scss";

const ItemSide = ({ title, description, img }) => {
  return (
    <div className="body_inside_right">
      <div className="body_inside_items">
        <img src={img ? img : Umbrella} alt="Sombrilla color Naranja" />
        <h3>{title ? title : "Puri RAIN"}</h3>
        <hr />
        <p>
          {description
            ? description
            : "Descrición del producto. Este es un texto simulado"}
        </p>
        <div>
          <h5>{"> VER MÁS"}</h5>
        </div>
      </div>
    </div>
  );
};

export default ItemSide;
