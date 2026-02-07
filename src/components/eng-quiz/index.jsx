import React from "react";
import Header from "./header";
import HeroArea from "./hero-area";

const index = () => {
  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        <Header />
        <HeroArea />
      </div>
    </div>
  );
};

export default index;
