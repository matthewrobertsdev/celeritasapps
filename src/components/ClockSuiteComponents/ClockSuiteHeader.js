//Copyright  © 2020-2021  Matt Roberts

//import React
import React from 'react';

//import mac app store download image
import DownloadOnMacAppStore from '../../resources/DownloadOnMacAppStore.png';

import GreenClockImage from "../../resources/LightModeClockMedium/GreenClockLight.png";

export default function ClockSuiteHeader() {
  return (
    <span>
      <br/>
      <h1 className="text-align-center title">
        Clock Suite
      </h1>
      <hr/>
      <br/>
      <a href='https://apps.apple.com/app/apple-store/id1531519063?pt=122105291&ct=clocksuite&mt=8'>
        <img src={DownloadOnMacAppStore} alt={'Download on Mac App Store'} 
          className='mac-app-store-badge centered-image'/>
      </a>
      <br/>
      <img src={GreenClockImage} className="centered-image" alt="Green Clock Suite"></img>
      <h2 className="text-align-center">
        A great Clock Suite for your computer--Alarms, Timers, a Resizable
        Clock, and a Dock Clock for your computer's dock.  All in
        brilliant color, that works in dark mode and light
        mode with many color choices that you'll desire.  Choose from
        songs you own or from built-in alerts for sounds when
        your alarms and timers go off.  Clock and Dock Clock can be
        digital or analog.
      </h2>
    </span>
  );
}