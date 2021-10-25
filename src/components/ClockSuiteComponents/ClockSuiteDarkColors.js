//Copyright  © 2020-2021  Matt Roberts

//import React
import React from "react";

//import clock images and videos
import CustomColorClockDarkImage from "../../resources/DarkModeClockMedium/CustomColorClockDark.png";
import RedClockDarkImage from "../../resources/DarkModeClockMedium/RedClockDark.png";
import OrangeClockDarkImage from "../../resources/DarkModeClockMedium/OrangeClockDark.png";
import YellowClockDarkImage from "../../resources/DarkModeClockMedium/YellowClockDark.png";
import GreenClockDarkImage from "../../resources/DarkModeClockMedium/GreenClockDark.png";
import BlueClockDarkImage from "../../resources/DarkModeClockMedium/BlueClockDark.png";
import PurpleClockDarkImage from "../../resources/DarkModeClockMedium/PurpleClockDark.png";
import PinkClockDarkImage from "../../resources/DarkModeClockMedium/PinkClockDark.png";
import BrownClockDarkImage from "../../resources/DarkModeClockMedium/BrownClockDark.png";
import BlackClockDarkImage from "../../resources/DarkModeClockMedium/BlackClockDark.png";
import SystemDarkClockDarkImage from "../../resources/DarkModeClockMedium/SystemDarkClockDark.png";
import GrayClockDarkImage from "../../resources/DarkModeClockMedium/GrayClockDark.png";
import WhiteClockDarkImage from "../../resources/DarkModeClockMedium/WhiteClockDark.png";

//import Carousel and its css
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function ClockSuiteLightColors() {
  return (
    <span>
      <h2 className="text-align-center">
        Dark Mode
      </h2>
      <div className="carousel">
        <Carousel showArrows={true} className="carousel-style">
          <div>
            <img src={RedClockDarkImage} alt="Clock Suite Red Color Scheme in Dark Mode" />
          </div>
          <div>
            <img src={OrangeClockDarkImage} alt="Clock Suite Orange Color Scheme in Dark Mode" />
          </div>
          <div>
            <img src={YellowClockDarkImage} alt="Clock Suite Yellow Color Scheme in Dark Mode" />
          </div>
          <div>
            <img src={GreenClockDarkImage} alt="Clock Suite Green Color Scheme in Dark Mode" />
          </div>
          <div>
            <img src={BlueClockDarkImage} alt="Clock Suite Blue Color Scheme in Dark Mode" />
          </div>
          <div>
            <img src={PurpleClockDarkImage} alt="Clock Suite Purple Color Scheme in Dark Mode" />
          </div>
          <div>
            <img src={PinkClockDarkImage} alt="Clock Suite Pink Color Scheme in Dark Mode" />
          </div>
          <div>
            <img src={BrownClockDarkImage} alt="Clock Suite Brown Color Scheme in Dark Mode" />
          </div>
          <div>
            <img src={BlackClockDarkImage} alt="Clock Suite Black Color Scheme in Dark Mode" />
          </div>
          <div>
            <img src={SystemDarkClockDarkImage} alt="Clock Suite System Dark Color Scheme in Dark Mode" />
          </div>
          <div>
            <img src={GrayClockDarkImage} alt="Clock Suite Gray Color Scheme in Dark Mode" />
          </div>
          <div>
            <img src={WhiteClockDarkImage} alt="Clock Suite White Color Scheme in Dark Mode" />
          </div>
          <div>
            <img src={CustomColorClockDarkImage} alt="Clock Suite Custom Color Scheme in Dark Mode" />
          </div>
        </Carousel>
      </div>
    </span>
  );
}