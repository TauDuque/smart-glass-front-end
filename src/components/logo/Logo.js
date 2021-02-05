import React from "react";
import Tilt from "react-vanilla-tilt";
import glasses from "./icons8-óculos-50.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo-container">
      <Tilt
        className="Tilt br2 shadow-2 top0"
        options={{ max: 75 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner">
          <img
            alt="logo"
            style={{ paddingTop: "20px", height: 105, width: 180 }}
            src={glasses}
            sizes="64x64 32x32 24x24 16x16"
            type="image/png"
          />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
