//Copyright  © 2020  Matt Roberts
import React, { useEffect, useState } from 'react';
import ContactCardsMobileView from '../components/ContactCardsMobileView'

const contactCardsInfo={
  title: 'Contact Cards',
  header: `Have more than one contact card for yourself so you 
  can share what you want with whom you want.  Share virtually or 
  with a QR code.`,
  header2: `Want to have more than one contact card for yourself, 
  and choose which you share with whom?  Contact Cards lets you 
  do just that.  It allows you to conveniently share different 
  contact cards with different people.  Within the app, you 
  give the card a title and a color, but when you share it 
  virtually, whomever you are sharing it with will see none 
  of that.  No one has to have the app for you to give them 
  your contact.  Take control of your privacy with the 
  convenience of Contact Cards.`
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
        return (<div></div>);
      } else if (currentTab==='desktop') {
        return (<div></div>);
      } else {
        return (<div></div>);
      }
    }
}

export default ContactCardsPage
