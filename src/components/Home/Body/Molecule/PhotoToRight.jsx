import React from "react";

import "../../../../assets/styles/components/Body.scss";
import ItemSide from "../Atomic/ItemSide";
import PhotoSide from "../Atomic/PhotoSide";

const PhotoToRight = (props) => {
  return (
    <>
      <ItemSide />
      <PhotoSide />
    </>
  );
};

export default PhotoToRight;
