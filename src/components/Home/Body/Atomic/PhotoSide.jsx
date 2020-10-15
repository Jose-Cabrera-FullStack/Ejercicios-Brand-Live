import React, { useState } from "react";

import Button from "../../../Utils/Buttons";
import "../../../../assets/styles/components/Body.scss";

const PhotoSide = (props) => {
  const [isHover, setIsHover] = useState(false);

  const hoverHandle = () => {
    setIsHover(!isHover);
  };
  console.log(props);

  return (
    <div
      className={`body_inside_photo ${
        (props.photo ? props.photo : "body_inside_photo-photo-1") +
        " " +
        (isHover ? props.photo + "-hover" : "")
      }`}
      onMouseLeave={hoverHandle}
      onMouseEnter={hoverHandle}
    >
      {isHover ? <Button /> : ""}
    </div>
  );
};

export default PhotoSide;
