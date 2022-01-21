//Copyright  © 2020-2021  Matt Roberts

//import React
import React, { useEffect } from 'react';

//import images
import SpiffyClock256 from "../resources/SpiffyClock256.png";

//import components
import AppIconWithTitle from '../components/AppIconWithTitle'

export default function ClockSuitePrivacyPolicy() {
  useEffect(()=>{document.title = "Celeritas Apps | Privacy Policy"})
  return (
    <main className={'main-background main-blue'}>
      <br/>
      <AppIconWithTitle image={SpiffyClock256} alt='Spiffy Clock App Icon' 
        name='Spiffy Clock Privacy Policy' id='spiffyclockprivacypolicy'/>
      <h2 className='main-text'>
        Spiffy Clock does not collect data from its users, and does not connect to the internet.  
        Any changes to the privacy policy of Spiffy Clock will be reflected here.
      </h2>
      <br/>
      <br/>
      <br/>
    </main>
  );
}