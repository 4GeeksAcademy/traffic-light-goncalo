import React, { useState } from "react";

const TrafficLight = () => {
  const [activeColor, setActiveColor] = useState("red");

  const handleClick = (color) => {
    setActiveColor(color);
  };

  return (
    <>
      <div className="traffic-light">
        <div
          className={`light-red ${activeColor === "red" ? "active" : ""}`}
          onClick={() => handleClick("red")}
        ></div>
        <div
          className={`light-yellow ${activeColor === "yellow" ? "active" : ""}`}
          onClick={() => handleClick("yellow")}
        ></div>
        <div
          className={`light-green ${activeColor === "green" ? "active" : ""}`}
          onClick={() => handleClick("green")}
        ></div>
      </div>
    </>
  );
};

export default TrafficLight;
