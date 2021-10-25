//Copyright  © 2020-2021  Matt Roberts

//import React
import React from "react";

//import images
import ClockPurpleTranslucentBackground from "../../resources/ClockPurpleTranslucentBackground.png";
import ClockPurpleGrayBackground from "../../resources/ClockPurpleGrayBackground.png";

//import Carousel and its css
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function ClockSuiteForegroundBackground() {
  return (
    <span>
      <h2 className="text-align-center">
        Color as Foreground, with Gray or Translucent Background
      </h2>
      <div className="carousel">
        <Carousel showArrows={true} className="carousel-style">
          <div>
            <img src={ClockPurpleGrayBackground} alt="Clock Suite Purple Color as Foreground with Gray Background" />
          </div>
          <div>
            <img src={ClockPurpleTranslucentBackground} alt="Clock Suite Purple Color as Foreground with Translucent Background" />
          </div>
        </Carousel>
      </div>
    </span>
  );
}