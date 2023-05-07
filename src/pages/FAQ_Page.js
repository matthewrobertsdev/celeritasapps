//Copyright  © 2020-2021  Matt Roberts

//import React
import React, { useEffect } from 'react';

//import images
import ClockSuite256 from "../resources/ClockSuite256.png";
import FilterArt256 from "../resources/FilterArt256.png";
import ContactCards256 from "../resources/ContactCards256.png";
import SpiffyClock256 from "../resources/SpiffyClock256.png";


//import components
import SmallAppIconLink from '../components/SmallAppIconLink'

export default function FAQ_Page() {
  useEffect(() => { document.title = "Celeritas Apps | FAQ" })
  return (
    <main className={'main-background main-blue'}>
      <br/>
      <h1 className='main-h-1'>
        Frequently Asked Questions
      </h1>
      <hr className='main-margin'/>
      <SmallAppIconLink image={ClockSuite256} relativeLink='/faq/clocksuite'
                alt='Clock Suite App Icon' name='FAQ for Clock Suite' />
      <br/>
      <br/>
      <SmallAppIconLink image={FilterArt256} relativeLink='/faq/filterart'
                alt='Filter Art App Icon' name='FAQ for Filter Art' />
      <br/>
      <br/>
      <SmallAppIconLink image={SpiffyClock256} relativeLink='/faq/spiffyclock'
                alt='Spiffy Clock App Icon' name='FAQ for Spiffy Clock' />
      <br/>
      <br/>
      <SmallAppIconLink image={ContactCards256} relativeLink='/faq/contactcards'
                alt='Contact Cards App Icon' name='FAQ for Contact Cards' />
      <br/>
      <br/>
      <hr className='main-margin'/>
      <br/>
      <br/>
    </main>
  )
}
