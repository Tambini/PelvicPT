import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import AwesomeSliderStyles from "react-awesome-slider/dist/styles.css";

import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
  return (
    <div className="slider">
      <AutoplaySlider
        play={true}
        showTimer={false}
        cancelOnInteraction={false}
        interval={10000}
        animation="cubeAnimation"
        bullets={false}
        cssModule={AwesomeSliderStyles}
        mobileTouch={true}
      >
        <div className="sliderImage" data-src={image1} />
        <div className="sliderImage" data-src={image2} />
        <div className="sliderImage" data-src={image3} />
        <div className="sliderImage" data-src={image4} />

        {/* <div data-src="/path/to/image-1.png" />
    <div data-src="/path/to/image-2.jpg" /> */}
      </AutoplaySlider>
    </div>
  );
};

export default Slider;
