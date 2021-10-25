//Copyright  © 2020-2021  Matt Roberts

//import React
import React from "react";

//import images and videos
import AlarmSetUpImage from "../../resources/AlarmSetUp.png";
import TimerSetUpImage from "../../resources/TimerSetUp.png";

import UseTimerImage from "../../resources/UseTimer.png";
import UseTimerVideo from "../../resources/UseTimer.mp4";

import TimerImage from "../../resources/LightTimer.png";

export default function ClockSuiteAlarmsAndTimers() {
  return (
    <span>
      <h1 className="text-align-center">
        Alarms and Timers
      </h1>
      <h2 className="text-align-center">
        Up to 24 Alarms.
      </h2>
      <img src={AlarmSetUpImage} className="centered-image" alt="Alarm Set-Up" />
      <h2 className="text-align-center">
        3 Countdown Timers that can be set for up to
        23:59:59 hours each, or as short as you like.
      </h2>
      <img src={TimerSetUpImage} className="centered-image" alt="Timer Set-Up" />
      <h3 className="text-align-center">
        —Countdown Timer counting-down is visible as time passes.
      </h3>
      <video controls poster={UseTimerImage}>
        <source src={UseTimerVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h3 className="text-align-center">
        -Timers can float on top or go behind other windows.
      </h3>
      <h1 className="text-align-center">
        Alerts and Songs
      </h1>
      <h3 className="text-align-center">
        —Play songs or alerts when an alarm or timer goes off.
        (Please note—does not work with Apple Music.  You must
        own a copy of the song you wish to play.)
      </h3>
      <h3 className="text-align-center">
        —Can have a playlist of songs from which to choose a song to
        play when an alarm or timer goes off.
      </h3>
      <h3 className="text-align-center">
        —Alarms and Timers
        will block your computer from sleeping unless you
        tell it to sleep, so you don’t have to worry that
        your alarm or timer will not go off.
      </h3>
      <img src={TimerImage} className="centered-image" alt="Countdown Timer"></img>
    </span>
  );
}