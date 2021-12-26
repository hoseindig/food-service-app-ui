import berger from "./image/berger.png";
import React, { Component } from "react";

const MainBox = () => {
  return (
    <React.Fragment>
      <div className="mainBox">
        <img className="berger" src={berger} alt="" />
      </div>
    </React.Fragment>
  );
};

export default MainBox;
