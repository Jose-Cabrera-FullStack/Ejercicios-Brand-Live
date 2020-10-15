import React from "react";

import PhotoToLeft from "./Body/Molecule/PhotoToLeft";
import PhotoToRight from "./Body/Molecule/PhotoToRight";

import "../../assets/styles/components/Body.scss";

const Body = (props) => {
  return (
    <div className="body">
      <div className="body_inside">
        <PhotoToLeft />
        <PhotoToRight src description title />
        <PhotoToLeft />
      </div>
    </div>
  );
};

export default Body;
