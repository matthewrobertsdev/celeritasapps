//Copyright  © 2020  Matt Roberts
import React, { useEffect, useState } from 'react';

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
      </div>
      <br></br>
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
}

export default ContactCardsPage
