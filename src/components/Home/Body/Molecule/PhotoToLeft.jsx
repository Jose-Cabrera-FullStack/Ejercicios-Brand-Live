import React from "react";

import "../../../../assets/styles/components/Body.scss";
import ItemSide from "../Atomic/ItemSide";
import PhotoSide from "../Atomic/PhotoSide";

const PhotoToLeft = (props) => {
  const title = props.title;
  const src = props.src;
  const photo = props.photo;
  return (
    <>
      <PhotoSide photo={photo} />
      <ItemSide title={title} src={src} />
    </>
  );
};

export default PhotoToLeft;
