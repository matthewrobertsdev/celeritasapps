import React, { useEffect } from 'react';
import ClockSuite256 from "../resources/ClockSuite256.png";
import AppIconWithTitle from '../components/AppIconWithTitle'
const FAQ_Page = () => {
  useEffect(() => { document.title = "Celeritas Apps | FAQ" })
  return (
    <main className={'main-background main-blue'}>
      <br></br><br></br>
      <hr className='main-margin'/>
      <br></br><br></br>
      <AppIconWithTitle image={ClockSuite256} alt='Clock Suite App Icon' 
      name='FAQ for Clock Suite' id='clocksuitefaq'/>
      <br></br>
      <h2 className="text-align-center">
        Question: How do I enable translucency for the active Clock Suite window?
      </h2>
      <h3 className="main-margin">
        Answer: You must open Clock Suite Preferences under the Clock Suite menu 
        and select "Translucent", under "Color For Foreground Background".  
        You also must have selected, under the Colors menu, "Color for Foreground"
        to have an active window be translucent.  Only a window that is active 
        will be translucent (such as the last window you clicked on).  If it is 
        no longer the active window, it will no longer be translucent. If you 
        click on it again, it will become translucent again.  
        To return to a dark gray background for when the chosen color is the 
        foreground, go to Clock Suite Preferences under 
        the Clock Suite menu and select "Dark Gray", under "Color For Foreground 
        Background".  Once again, "Color for Foreground" must be selected to see 
        the dark gray background.
      </h3>
      <h2 className="text-align-center">
        Question: How do I switch between AM/PM mode and using a 24 hour clock?
      </h2>
      <h3 className="main-margin">
        Answer: You must open Clock Suite Preferences under the Clock Suite menu 
        and select or deselect the "Use 24 Hour Clock" checkbox.
      </h3>
      <br></br>
      <hr className='main-margin'/>
      <br></br><br></br>
    </main>
  )
}

export default FAQ_Page