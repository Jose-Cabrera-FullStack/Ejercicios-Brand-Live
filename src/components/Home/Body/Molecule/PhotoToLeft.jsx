import React from "react";

import "../../../../assets/styles/components/Body.scss";
import ItemSide from "../Atomic/ItemSide";
import PhotoSide from "../Atomic/PhotoSide";

const PhotoToLeft = (props) => {
  return (
    <>
      <PhotoSide />
      <ItemSide />
    </>
  );
};

export default PhotoToLeft;
