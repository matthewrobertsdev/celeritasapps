//Copyright  © 2020-2021  Matt Roberts

//import React
import React from "react";

//import clock images and videos
import DockClockImage from "../../resources/DockClock.png";
import DockClockVideo from "../../resources/DockClock.mp4";

export default function ClockSuiteDockClock() {
  return (
    <span>
      <h1 className="text-align-center">
        Dock Clock
      </h1>
      <h3 className="text-align-center">
        —Runs when your app is in use or just open.
      </h3>
      <h3 className="text-align-center">
        —Can show or hide seconds.
      </h3>
      <h3 className="text-align-center">
        —Can be digital or analog.
      </h3>
      <video controls poster={DockClockImage}>
        <source src={DockClockVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </span>
  );
}