// import berger from 'images/berger.png'//"../images/berger.png";
import React, { Component } from "react";

const MainBox = () => {
  return (
    <React.Fragment>
      <div className="mainBox" style={{backgroundImage: "url(./images/foad-header.png)"}}>
        <div className="center-box">
          <img className="berger" src="./images/berger.png" alt="" />
          <div>
            <h1>برگرهای خوشمزه و لذیذ</h1>
            <h1 className="white-text">برای شما عزیزان</h1>
            <span>لذت طعمی دلچسب</span>
            <br />
            <button type="button" className="btn btn-danger rounded-custom">سفارش</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainBox;
