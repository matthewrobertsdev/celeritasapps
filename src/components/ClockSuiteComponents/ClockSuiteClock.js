//Copyright  © 2020-2021  Matt Roberts

//import React
import React from 'react';

//import images and videos
import ClockShowHideSeconds from "../../resources/ClockShowHideSeconds.mp4";
import AnalogClockImage from "../../resources/AnalogClock.png";
import ClockShowHideDateVideo from "../../resources/ClockShowHideDate.mp4";
import ClockShowHideDateImage from "../../resources/ClockShowHideDate.png";

export default function ClockSuiteHeader() {
  return (
    <span>
      <h1 className="text-align-center">
        Clock
      </h1>
      <h3 className="text-align-center">
        —Completely resizable, just by dragging its edges, anywhere 
        from very small to full screen.
      </h3>
      <h3 className="text-align-center">
        —Can show or hide seconds.
      </h3>
      <h3 className="text-align-center">
        —Can be digital or analog.
      </h3>
      <h3 className="text-align-center">
        —Clock can float on top or go behind other windows.
      </h3>
      <video controls poster={AnalogClockImage}>
        <source src={ClockShowHideSeconds} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      <br/>
      <br/>
      <br/>
      <h3 className="text-align-center">
        —Can show or hide the date and the day of the week.
      </h3>
      <video controls poster={ClockShowHideDateImage}>
        <source src={ClockShowHideDateVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </span>
  );
}