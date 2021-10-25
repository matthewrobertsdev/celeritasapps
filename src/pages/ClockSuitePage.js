//Copyright  © 2020-2021  Matt Roberts

//import React
import React, { useEffect } from 'react';

//import components
import ClockSuiteHeader from "../components/ClockSuiteComponents/ClockSuiteHeader";
import ClockSuiteClock from "../components/ClockSuiteComponents/ClockSuiteClock";
import ClockSuiteColors from "../components/ClockSuiteComponents/ClockSuiteColors";
import ClockSuiteLightColors from "../components/ClockSuiteComponents/ClockSuiteLightColors";
import ClockSuiteDarkColors from "../components/ClockSuiteComponents/ClockSuiteDarkColors";
import ClockSuiteForegroundBackground from "../components/ClockSuiteComponents/ClockSuiteForegroundBackground";
import ClockSuiteAlarmsAndTimers from "../components/ClockSuiteComponents/ClockSuiteAlarmsAndTimers";
import ClockSuiteMiscellaneous from "../components/ClockSuiteComponents/ClockSuiteMiscellaneous";
import ClockSuiteDockClock from "../components/ClockSuiteComponents/ClockSuiteDockClock";

export default function ClockSuitePage() {
  useEffect(()=>{document.title = "Clock Suite"})
  return (
    <main>
      <div className={'main-background main-blue'}>
        <div className="main-margin">
          <ClockSuiteHeader/>
          <ClockSuiteClock/>
          <ClockSuiteColors/>
          <ClockSuiteLightColors/>
          <ClockSuiteDarkColors/>
          <ClockSuiteForegroundBackground/>
          <ClockSuiteAlarmsAndTimers/>
          <ClockSuiteDockClock/>
          <ClockSuiteMiscellaneous/>
        </div>
      </div>
    </main>
  );
}
