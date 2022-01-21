//Copyright  © 2020-2021  Matt Roberts

//import React
import React, { useEffect } from 'react';

//import images
import ClockSuite256 from "../resources/ClockSuite256.png";
import ContactCards256 from "../resources/ContactCards256.png";
import SpiffyClock256 from "../resources/SpiffyClock256.png";


//import components
import SmallAppIconLink from '../components/SmallAppIconLink'

export default function AppsPage() {
  useEffect(()=>{document.title = "Celeritas Apps | Apps"})
  return (
    <main className={'main-background main-blue'}>
      <br/>
      <h1 className='main-h-1'>
        Apps
      </h1>
      <SmallAppIconLink image={ClockSuite256} relativeLink='/clocksuite'
        alt='Clock Suite App Icon' name='Clock Suite' />
      <h2 className="ten-percent-margin">
        A 4 in 1 Clock Suite for your Mac.  A clock (digital or analog), 
        timers, alarms and a dock clock, with many color choices and a 
        custom color of your choosing, and with dark mode and light mode 
        and built-in sounds or songs you own for alerts.
      </h2>
      <SmallAppIconLink image={ContactCards256} relativeLink='/contactcards'
        alt='Contact Cards App Icon' name='Contact Cards' />
      <h2 className="ten-percent-margin">
        Have multiple contact cards for yourself so you can share what you 
        want with whom you want, whether or not they have the app.  Share 
        virtually or by QR code.
      </h2>
      <SmallAppIconLink image={SpiffyClock256} relativeLink='/spiffyclock'
        alt='Spiffy Clock App Icon' name='Spiffy Clock' />
      <h2 className="ten-percent-margin">
        A nice and relaxing clock for your iPhone or iPad, with colors that 
        change with dark mode and light mode, and many choices for display of the time
        and the date and the day of the week.
      </h2>
      <br/>
      <br/>
      <br/>
    </main>
  );
}