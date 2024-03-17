import React, { useState} from "react";

const TrafficLight = () => {
   
    const [colorIndex, setColorIndex] = useState(0)

    const colors = ["red", "yellow", "green"];
      
    const handleClick = () => {
        setInterval(() => {
            setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
        }, 3000);
    };

    return (
        <>
            <div className="traffic-light">
                {colors.map((color, index) => (
                    <div
                        key={color}
                        className={`light-${color} ${colorIndex === index ? "active" : ""}`}
                    ></div>
                ))}
            </div>
            <button className="start-button" onClick={handleClick}>Change Color</button> 
        </>
    )
}

export default TrafficLight