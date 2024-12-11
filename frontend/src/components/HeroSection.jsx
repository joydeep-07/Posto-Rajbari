import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title"> The True  </h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="https://i.pinimg.com/236x/ec/ff/e1/ecffe1595db52838e2b99d9a7ccb7637.jpg" alt="hero" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">  Bengali  </h1>
                <h1 className="title dishes_title">Dishes</h1>
                <img src="./threelines.svg" alt="threelines" />
              </div>
              <img className="logo" src="logo.svg" alt="logo" />
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img src="https://i.pinimg.com/474x/ef/b6/e7/efb6e7c30f2ec339112b22bf10dd62dc.jpg" alt="hero" />
          </div>
          <h1 className="title dishes_title">Cusine</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
