import React from "react";

import "../../../assets/styles/components/Instagram.scss";
import Photo1 from "../../../assets/static/images/img/Photo1.png";
import Photo2 from "../../../assets/static/images/img/Photo2.png";
import Photo3 from "../../../assets/static/images/img/Photo3.png";
import Photo4 from "../../../assets/static/images/img/Photo4.png";
import Photo5 from "../../../assets/static/images/img/Photo5.png";
import Photo6 from "../../../assets/static/images/img/Photo6.png";

const Instagram = () => {
  return (
    <div className="instagram instagram-photos">
      <div>
        <img src={Photo1} alt="Fotos de usuarios usando PUFI" />
        <img src={Photo2} alt="Fotos de usuarios usando PUFI" />
        <img src={Photo3} alt="Fotos de usuarios usando PUFI" />
      </div>
      <div>
        <img src={Photo4} alt="Fotos de usuarios usando PUFI" />
        <img src={Photo5} alt="Fotos de usuarios usando PUFI" />
        <img src={Photo6} alt="Fotos de usuarios usando PUFI" />
      </div>
    </div>
  );
};

export default Instagram;
