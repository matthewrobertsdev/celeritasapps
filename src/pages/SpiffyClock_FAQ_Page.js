//Copyright  © 2020-2021  Matt Roberts

//import React
import React, { useEffect } from 'react';

//import images
import SpiffyClock256 from "../resources/SpiffyClock256.png";

//import components
import AppIconWithTitle from '../components/AppIconWithTitle';

export default function ClockSuite_FAQ_Page() {
  useEffect(() => { document.title = "Celeritas Apps | FAQ" })
  return (
    <main className={'main-background main-blue'}>
      <br/>
      <br/>
      <hr className='main-margin'/>
      <br/>
      <br/>
      <AppIconWithTitle image={SpiffyClock256} alt='Spiffy Clock App Icon' 
      name='FAQ for Spiffy Clock' id='spiffyclockfaq'/>
      <br/>
      <h2 className="text-align-center">
        Question: Why does night mode not make the text dark?
      </h2>
      <h3 className="main-margin">
        Answer: For night mode to have effect, you must be using dark mode.  If it is
        not darkening the text, you must not be using system-wide dark mode at that time.
      </h3>
      <br/>
      <hr className='main-margin'/>
      <br/>
      <br/>
    </main>
  )
}
