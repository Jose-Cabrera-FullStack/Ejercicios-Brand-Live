import React from "react";

import PhotoToLeft from "./Body/Molecule/PhotoToLeft";
import PhotoToRight from "./Body/Molecule/PhotoToRight";

import Cart from "../../assets/static/images/img/tiny-cart.png";
import Nap from "../../assets/static/images/img/tiny-nap.png";
import Puff from "../../assets/static/images/img/tiny-puff.png";
import "../../assets/styles/components/Body.scss";

const Body = (props) => {
  return (
    <div className="body">
      <div className="body_inside">
        <PhotoToLeft RAIN title={"RAIN"} photo={"body_inside_photo-photo-1"} />
        <PhotoToRight
          PUFF
          title={"PUFF"}
          src={Puff}
          photo={"body_inside_photo-photo-2"}
        />
        <PhotoToLeft
          CART
          title={"CART"}
          src={Cart}
          photo={"body_inside_photo-photo-3"}
        />
        <PhotoToRight
          NAP
          title={"NAP"}
          src={Nap}
          photo={"body_inside_photo-photo-4"}
        />
      </div>
    </div>
  );
};

export default Body;
