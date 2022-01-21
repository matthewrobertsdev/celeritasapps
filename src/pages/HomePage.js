//Copyright  © 2020-2021  Matt Roberts

//import react
import React, { useEffect } from 'react';

//import link from react router dom
import { Link } from 'react-router-dom';

//omport components
import LargeAppIconLink from "../components/LargeAppIconLink"

//import images
import ClockSuite256 from "../resources/ClockSuite256.png";
import ContactCards256 from "../resources/ContactCards256.png";
import SpiffyClock256 from "../resources/SpiffyClock256.png";
import PurpleClockImage from "../resources/DarkModeClockMedium/PurpleClockDark.png";
import ContactCardsMain from "../resources/ContactCardsiPhone/ContactCardsMain.png";
import ContactCardsDetail from "../resources/ContactCardsiPhone/ContactCardsDetail.png";
import ContactCardsQRCode from "../resources/ContactCardsiPhone/ContactCardsQRCode.png";

export default function HomePage() {
  useEffect(() => { document.title = "Celeritas Apps" })
  return (
    <main className={'main-background main-blue'}>
      <br/>
      <div className='icon-container'>
        <LargeAppIconLink image={ClockSuite256} relativeLink='/clocksuite'
          alt='Clock Suite App Icon' name='Clock Suite' />
        <LargeAppIconLink image={ContactCards256} relativeLink='/contactcards'
          alt='Contact Cards App Icon' name='Contact Cards' />
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
          A 4 in 1 Clock Suite.  A clock (digital or analog), timers, alarms 
          and a dock clock, with many color choices and a custom color of your choosing, 
          and with dark mode and light mode and built-in sounds or songs you own for alerts.
        </h2>
        <br/>
        <hr/>
        <br/>
        <Link to='/contactcards' className='title text'>Contact Cards</Link>
        <br/>
        <br/>
        <br/>
        <img src={ContactCardsMain} className="iPhone-media" alt="Contact Cards"></img>
        <img src={ContactCardsDetail} className="iPhone-media" alt="Contact Detail"></img>
        <img src={ContactCardsQRCode} className="iPhone-media" alt="Contact QR Code"></img>
        <h2 className="text-align-center">
        Have multiple contact cards for yourself so you can share what you want with whom 
        you want, whether or not they have the app.  Share virtually or by QR code.
        </h2>
      </div>
      <br/>
      <br/>
      <br/>
    </main>
  );
}