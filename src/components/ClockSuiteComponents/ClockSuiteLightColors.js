//Copyright  © 2020-2021  Matt Roberts

//import React
import React from "react";

//import clock images and videos
import CustomColorClockImage from "../../resources/LightModeClockMedium/CustomColorClockLight.png";
import RedClockImage from "../../resources/LightModeClockMedium/RedClockLight.png";
import OrangeClockImage from "../../resources/LightModeClockMedium/OrangeClockLight.png";
import YellowClockImage from "../../resources/LightModeClockMedium/YellowClockLight.png";
import GreenClockImage from "../../resources/LightModeClockMedium/GreenClockLight.png";
import BlueClockImage from "../../resources/LightModeClockMedium/BlueClockLight.png";
import PurpleClockImage from "../../resources/LightModeClockMedium/PurpleClockLight.png";
import PinkClockImage from "../../resources/LightModeClockMedium/PinkClockLight.png";
import BrownClockImage from "../../resources/LightModeClockMedium/BrownClockLight.png";
import BlackClockImage from "../../resources/LightModeClockMedium/BlackClockLight.png";
import GrayClockImage from "../../resources/LightModeClockMedium/GrayClockLight.png";
import SystemLightClockImage from "../../resources/LightModeClockMedium/SystemLightClockLight.png";
import WhiteClockImage from "../../resources/LightModeClockMedium/WhiteClockLight.png";

//import Carousel and its css
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function ClockSuiteLightColors() {
  return (
    <span>
      <h2 className="text-align-center">
        Light Mode
      </h2>
      <div className="carousel">
        <Carousel showArrows={true} className="carousel-style">
          <div>
            <img src={RedClockImage} alt="Clock Suite Red Color Scheme in Light Mode" />
          </div>
          <div>
            <img src={OrangeClockImage} alt="Clock Suite Orange Color Scheme in Light Mode" />
          </div>
          <div>
            <img src={YellowClockImage} alt="Clock Suite Yellow Color Scheme in Light Mode" />
          </div>
          <div>
            <img src={GreenClockImage} alt="Clock Suite Green Color Scheme in Light Mode" />
          </div>
          <div>
            <img src={BlueClockImage} alt="Clock Suite Blue Color Scheme in Light Mode" />
          </div>
          <div>
            <img src={PurpleClockImage} alt="Clock Suite Purple Color Scheme in Light Mode" />
          </div>
          <div>
            <img src={PinkClockImage} alt="Clock Suite Pink Color Scheme in Light Mode" />
          </div>
          <div>
            <img src={BrownClockImage} alt="Clock Suite Brown Color Scheme in Light Mode" />
          </div>
          <div>
            <img src={BlackClockImage} alt="Clock Suite Black Color Scheme in Light Mode" />
          </div>
          <div>
            <img src={GrayClockImage} alt="Clock Suite Gray Color Scheme in Light Mode" />
          </div>
          <div>
            <img src={SystemLightClockImage} alt="Clock Suite System Color Scheme in Light Mode" />
          </div>
          <div>
            <img src={WhiteClockImage} alt="Clock Suite White Color Scheme in Light Mode" />
          </div>
          <div>
            <img src={CustomColorClockImage} alt="Clock Suite Custom Color Scheme in Light Mode" />
          </div>
        </Carousel>
      </div>
    </span>
  );
}