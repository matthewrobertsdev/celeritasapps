//Copyright  © 2020-2021  Matt Roberts

//import React
import React, { useEffect } from 'react';

//import images
import ClockSuite256 from "../resources/ClockSuite256.png";
import FilterArt256 from "../resources/FilterArt256.png";
import SpiffyClock256 from "../resources/SpiffyClock256.png";
import ContactCards256 from "../resources/ContactCards256.png";

//import components
import SmallAppIconLink from '../components/SmallAppIconLink'

export default function PrivacyPolicyPage() {
  useEffect(()=>{document.title = "Celeritas Apps | Privacy Policy"})
  return (
    <main className={'main-background main-blue'}>
      <br/>
      <h1 className='main-h-1'>
        Privacy Policies
      </h1>
      <SmallAppIconLink image={ClockSuite256} relativeLink='/privacy/clocksuite' alt='Clock Suite App Icon' 
        name='Clock Suite Privacy Policy' id='clocksuiteprivacypolicy'/> 
      <SmallAppIconLink image={FilterArt256} relativeLink='/privacy/filterart' alt='Filter Art App Icon' 
        name='Filter Art Privacy Policy' id='filterartprivacypolicy'/>
      <SmallAppIconLink image={SpiffyClock256} relativeLink='/privacy/spiffyclock' alt='Spiffy Clock App Icon' 
        name='Spiffy Clock Privacy Policy' id='spiffyclockprivacypolicy'/>
        <SmallAppIconLink image={ContactCards256} relativeLink='/privacy/contactcards' alt='Contact Cards App Icon' 
        name='Contact Cards Privacy Policy' id='contactcardsprivacypolicy'/>
      <br/>
      <br/>
      <br/>
    </main>
  );
}