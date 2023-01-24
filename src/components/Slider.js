import React, { useState } from "react";
import bg from "../resources/images/top_v3_vision_bg.jpg";

import slider1 from "../resources/images/top_slider_01_pc.jpg";
import slider2 from "../resources/images/top_slider_02_pc.jpg";
import slider3 from "../resources/images/top_slider_03_pc.jpg";
import slider4 from "../resources/images/top_slider_04_pc.jpg";
import slider5 from "../resources/images/top_slider_05_pc.jpg";

const Slider = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [slider1, slider2, slider3, slider4, slider5];
  const texts = [
    { desc: "text1", heading: "heading1" },
    { desc: "text2", heading: "heading2" },
    { desc: "text3", heading: "heading3" },
    { desc: "text4", heading: "heading4" },
    { desc: "text5", heading: "heading5" },
  ];

  const handleNext = () => {
    if (currentSlider < sliders.length - 1) {
      setCurrentSlider((prevState) => (prevState += 1));
    } else {
      setCurrentSlider(0);
    }
  };
  const handlePrev = () => {
    if (currentSlider === 0) {
      setCurrentSlider(sliders.length - 1);
    } else {
      setCurrentSlider((prevState) => (prevState -= 1));
    }
  };
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div className="slider">
        <div
          style={{
            position: "absolute",
            left: "10px",
            top: "50%",
            color: "white",
          }}
        >
          <button onClick={handlePrev}>prev</button>
        </div>
        <img src={sliders[currentSlider]} />
        <div style={{ position: "absolute",top:'20px',bottom:'20px', textAlign:'center',display:'flex',width:'100vw',justifyContent:'center',alignItems:'center', flexWrap:'wrap'}}>
            <h2 className="p-2 w-full text-white text-2xl">{texts[currentSlider].heading}</h2>
            <p className="text-white p-2 m-2">{texts[currentSlider].desc}</p>      
        </div>
        <div
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            color: "white",
          }}
        >
          <button onClick={handleNext}> next </button>
        </div>
      </div>
    </div>
  );
};
export default Slider;
