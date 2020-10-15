import React from "react";

import "../../assets/styles/components/Instagram.scss";
import Photo from "./Instragram/Photos";

const Instagram = (props) => {
  return (
    <div className="instagram">
      <h5 className="instagram_title">INSTAGRAM</h5>
      <h2 className="instagram_hashtag">#ESPUFI</h2>
      <Photo />
    </div>
  );
};

export default Instagram;
