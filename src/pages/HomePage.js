//Copyright  © 2020-2021  Matt Roberts

//import react
import React, { useEffect } from 'react';

//import link from react router dom
import { Link } from 'react-router-dom';

//omport components
import LargeAppIconLink from "../components/LargeAppIconLink"

//import images
import ClockSuite256 from "../resources/ClockSuite256.png";
import SpiffyClock256 from "../resources/SpiffyClock256.png";
import FilterArt256 from "../resources/FilterArt256.png";
import PurpleClockImage from "../resources/DarkModeClockMedium/PurpleClockDark.png";
import SpiffyClockDarkRed from "../resources/SpiffyClock/DarkRed.png";
import SpiffyClockYellow from "../resources/SpiffyClock/Yellow.png";
import SpiffyClockGreenForeground from "../resources/SpiffyClock/GreenForeground.png";

export default function HomePage() {
  useEffect(() => { document.title = "Celeritas Apps" })
  return (
    <main className={'main-background main-blue'}>
      <br/>
      <div className='icon-container'>
        <LargeAppIconLink image={ClockSuite256} relativeLink='/clocksuite'
          alt='Clock Suite App Icon' name='Clock Suite' />
          <LargeAppIconLink image={FilterArt256} relativeLink='/filterart'
          alt='Filter Art App Icon' name='Filter Art' />
          <LargeAppIconLink image={SpiffyClock256} relativeLink='/spiffyclock'
          alt='Spiffy Clock App Icon' name='Spiffy Clock' />
      </div>
      <br/>
      <br/>
      <hr className='main-margin'/>
      <br/>
      <div className='text-align-center main-margin'>
        <Link to='/clocksuite' className='title text'>Clock Suite</Link>
        <br/>
        <br/>
        <br/>
        <img src={PurpleClockImage} className="centered-image" alt="Green Clock Suite"></img>
        <h2 className="text-align-center">
          A 5 in 1 Clock Suite.  A clock (digital or analog), timers, alarms, a stopwatch, 
          and a dock clock, with many color choices and a custom color of your choosing, 
          and with dark mode and light mode and built-in sounds or songs you own for alerts.
        </h2>
        <br/>
        <hr/>
        <br/>
        <Link to='/spiffyclock' className='title text'>Spiffy Clock</Link>
        <br/>
        <br/>
        <br/>
        <img src={SpiffyClockDarkRed} className="iPhone-media" alt="Spiffy Clock Dark Red"></img>
        <img src={SpiffyClockYellow} className="iPhone-media" alt="Spiffy Clock Yellow"></img>
        <img src={SpiffyClockGreenForeground} className="iPhone-media" alt="Spiffy Clock Green Foreground"></img>
        <h2 className="text-align-center">
        A nice and relaxing clock for your iPhone or iPad, with colors that 
        change with dark mode and light mode, and many choices for display of the time
        and the date and the day of the week.
        </h2>
      </div>
      <br/>
      <br/>
      <br/>
    </main>
  );
}