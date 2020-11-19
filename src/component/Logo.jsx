import React from "react";
import Tilt from "react-tilt";
import "../App.css";

const Logo = () => {
  return (
    <Tilt
      className="Tilt br2 shadow-2"
      options={{ max: 55 }}
      style={{ height: 150, width: 150 }}
    >
      <div className="Tilt-inner pa3">
        <img
          src="../image/brain.jpg"
          alt="brain"
          style={{ paddingTop: "15px" }}
        />
      </div>
    </Tilt>
  );
};

export default Logo;
