//Copyright  © 2020  Matt Roberts
import ClockSuite256 from "../resources/ClockSuite256.png";
import ContactCards256 from "../resources/ContactCards256.png";
import { Link } from 'react-router-dom';
import LargeAppIconLink from "../components/LargeAppIconLink"
import PurpleClockImage from "../resources/DarkModeClockMedium/PurpleClockDark.png";
import ContactCardsMain from "../resources/ContactCardsMain.png";
import ContactCardsDetail from "../resources/ContactCardsDetail.png";
import ContactCardsQRCode from "../resources/ContactCardsQRCode.png";



import React, { useEffect } from 'react';
const HomePage = () => {
  useEffect(() => { document.title = "Celeritas Apps" })
  return (<main className={'main-background main-blue'}>
    <br></br>
    <div className='icon-container'>
      <LargeAppIconLink image={ClockSuite256} relativeLink='/clocksuite'
        alt='Clock Suite App Icon' name='Clock Suite' />
      <LargeAppIconLink image={ContactCards256} relativeLink='/contactcards'
        alt='Contact Cards App Icon' name='Contact Cards' />
    </div>
    <br></br><br></br>
    <hr className='main-margin'/>
    <br></br>
    <div className='text-align-center main-margin'>
      <Link to='/clocksuite' className='title text'>Clock Suite</Link>
      <br></br><br></br><br></br>
      <img src={PurpleClockImage} className="centered-image" alt="Green Clock Suite"></img>
      <h2 className="text-align-center">
        A 4 in 1 Clock Suite.  A clock (digital or analog), timers, alarms 
        and a dock clock, with many color choices and a custom color of your choosing, 
        and with dark mode and light mode and built-in sounds or songs you own for alerts.
        </h2>
        <br></br>
        <hr/>
        <br></br>
        <Link to='/contactcards' className='title text'>Contact Cards</Link>
      <br></br><br></br><br></br>
      <img src={ContactCardsMain} className="iPhone-media" alt="Contact Cards"></img>
      <img src={ContactCardsDetail} className="iPhone-media" alt="Contact Detail"></img>
      <img src={ContactCardsQRCode} className="iPhone-media" alt="Contact QR Code"></img>
      <h2 className="text-align-center">
      Have multiple contact cards for yourself so you can share what you want with whom 
      you want, whether or not they have the app.  Share virtually or by QR code.
        </h2>
    </div>
    <br></br><br></br><br></br>
  </main>);
}
export default HomePage;