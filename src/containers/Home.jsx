import React from "react";

import Principal from "../components/Home/Principal";
import Body from "../components/Home/Body";
import Instagram from "../components/Home/Instagram";
import Subscribe from "../components/Home/Subscribe";

const Home = (props) => {
  return (
    <>
      <Principal />
      <Body />
      <Instagram />
      <Subscribe />
    </>
  );
};

export default Home;
