//Copyright  © 2020-2021  Matt Roberts

//import React
import React, { useEffect } from 'react';

//import images
import MathStudent256 from "../resources/MathStudent256.png";

//import components
import AppIconWithTitle from '../components/AppIconWithTitle'

export default function ClockSuitePrivacyPolicy() {
  useEffect(()=>{document.title = "Celeritas Apps | Privacy Policy"})
  return (
    <main className={'main-background main-blue'}>
      <br/>
      <AppIconWithTitle image={MathStudent256} alt='Math Student App Icon' 
        name='Math Student Privacy Policy' id='mathstudentprivacypolicy'/>
      <h2 className='main-text'>
        Math Student does not collect data from its users, and does not connect to the internet.  
        Any changes to the privacy policy of Math Student will be reflected here.
      </h2>
      <br/>
      <br/>
      <br/>
    </main>
  );
}