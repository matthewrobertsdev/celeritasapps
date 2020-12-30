import React, { useEffect } from 'react';
import ClockSuite256 from "../resources/ClockSuite256.png";
import ContactCards256 from "../resources/ContactCards256.png";
import SmallAppIconLink from '../components/SmallAppIconLink'
import AppIconWithTitle from '../components/AppIconWithTitle'
const FAQ_Page = () => {
  useEffect(() => { document.title = "Celeritas Apps | FAQ" })
  return (
    <main className={'main-background main-blue'}>
      <br></br>
      <h1 className='main-h-1'>Frequently Asked Questions</h1>
      <hr className='main-margin'/>
      <SmallAppIconLink image={ClockSuite256} relativeLink='#clocksuitefaq'
                alt='Clock Suite App Icon' name='FAQ for Clock Suite' />
      <br></br><br></br>
      <SmallAppIconLink image={ContactCards256} relativeLink='#contactcardsfaq'
                alt='Contact Cards App Icon' name='FAQ for Contact Cards' />
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
      <AppIconWithTitle image={ContactCards256} alt='Contact Cards App Icon' 
      name='FAQ for Contact Cards' id='contactcardsfaq'/>
      <br></br>
      <h2 className="text-align-center">
        Question: How is a contact shared from Contact Cards?
      </h2>
      <h3 className="main-margin">
        Answer: The contact is shared either virtually or by QR code.  Either way, the 
        information is stored in the vCard format, which works across device types.  Sharing 
        with devices outside of those made by Apple should not be a problem.  Please note that
        QR codes can only hold so much data so an extremely long contact may be unsharable by
        QR code.  Also, some smart phones may require the user to download a bar code scanner
        to scan a QR code.
      </h3>
      <br></br>
      <hr className='main-margin'/>
      <br></br><br></br>
    </main>
  )
}

export default FAQ_Page