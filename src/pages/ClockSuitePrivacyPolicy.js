//Copyright  © 2020-2021  Matt Roberts

//import React
import React, { useEffect } from 'react';

//import images
import ClockSuite256 from "../resources/ClockSuite256.png";

//import components
import AppIconWithTitle from '../components/AppIconWithTitle'

export default function ClockSuitePrivacyPolicy() {
  useEffect(()=>{document.title = "Celeritas Apps | Privacy Policy"})
  return (
    <main className={'main-background main-blue'}>
      <br/>
      <AppIconWithTitle image={ClockSuite256} alt='Clock Suite App Icon' 
        name='Clock Suite Privacy Policy' id='clocksuiteprivacypolicy'/>
      <h2 className='main-text'>
        Clock Suite does not collect data from its users, and does not connect to the internet.  
        Any changes to the privacy policy of Clock Suite will be reflected here.
      </h2>
      <br/>
      <br/>
      <br/>
    </main>
  );
}