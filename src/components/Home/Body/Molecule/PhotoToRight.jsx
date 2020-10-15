import React from "react";

import "../../../../assets/styles/components/Body.scss";
import ItemSide from "../Atomic/ItemSide";
import PhotoSide from "../Atomic/PhotoSide";

const PhotoToRight = (props) => {
  const title = props.title;
  const src = props.src;
  const photo = props.photo;
  return (
    <>
      <ItemSide title={title} src={src} />
      <PhotoSide photo={photo} />
    </>
  );
};

export default PhotoToRight;
