//Copyright  © 2020  Matt Roberts
import React, { useEffect, useState } from 'react';
import ContactCardsMobileView from '../components/ContactCardsMobileView'
import ContactCardsTabletView from '../components/ContactCardsTabletView'
import ContactCardsDesktopView from '../components/ContactCardsDesktopView'

const contactCardsInfo={
  title: 'Contact Cards',
  header: `Have multiple color-coded contact cards for yourself so you 
  can share what you want with whom you want, whether or not they 
  have the app.  Share virtually or with a QR code.`,
  detail: `Preview a contact card before sharing it.`,
  qrCode: `When sharing with QR Codes, you can share with colorful QR
  codes.  No neeed to be constrained to black and white.  Your color and 
  filename for the contact card will not be shared.`,
  sharableInfo: `Shareable information is: first name, last name, nickname,
  suffix, prefix, company, job title, department, mobile phone, 2 work phones,
  home phone, other phone, home email, 2 work emails, other email, Twitter username,
  Facebook URL, LinkedIn URL, home URL, 2 work URLs, 2 other URLs, home address,
  work address, other address.`,
  colors: `Color choices are white in dark mode/black in light mode, gray, 
  red, orange, yellow, green, blue, purple, pink, and pruple.  Please note: 
  color choices are private to you and will not share when you share the 
  contact as a file, whether virtually or in a QR code.`
}
const ContactCardsPage = () => {
  useEffect(()=>{document.title = "Contact Cards"})
  const [currentTab, setCurrentTab]=useState('mobile')
  return (
  <main>
    <div className={'main-background main-blue'}>
      <div className="main-margin">
        <br></br>
        <h1 className="text-align-center title">
          Contact Cards
        </h1>
        <div className="text-align-center">
          <span className={getTabClassName('mobile')} onClick={()=>setCurrentTab('mobile')}>Mobile</span>
          <span className={getTabClassName('tablet')} onClick={()=>setCurrentTab('tablet')}>Tablet</span>
          <span className={getTabClassName('desktop')} onClick={()=>setCurrentTab('desktop')}>Desktop</span>
        </div>
        <br/>
        <hr/>
        <br/>
        {getMain()}
      </div>
    </div>
  </main>
  )
    function getTabClassName(device) {
      if (currentTab===device) {
        return 'selected-tab'
      } else {
        return 'tab'
      }
    }

    function getMain() {
      if (currentTab==='mobile') {
        return (<ContactCardsMobileView info={contactCardsInfo}/>);
      } else if (currentTab==='tablet') {
        return (<ContactCardsTabletView info={contactCardsInfo}/>);
      } else if (currentTab==='desktop') {
        return (<ContactCardsDesktopView info={contactCardsInfo}/>);
      } else {
        return (<div></div>);
      }
    }
}

export default ContactCardsPage
