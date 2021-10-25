//Copyright  © 2020-2021  Matt Roberts

//import React
import React, { useEffect } from 'react';

//import images
import ContactCards256 from "../resources/ContactCards256.png";

//import components
import AppIconWithTitle from '../components/AppIconWithTitle'

export default function ContactCardsPrivacyPolicy() {
  useEffect(()=>{document.title = "Celeritas Apps | Privacy Policy"})
  return (
    <main className={'main-background main-blue'}>
      <br/>
      <AppIconWithTitle image={ContactCards256} alt='Contact Cards App Icon' 
        name='Contact Cards Privacy Policy' id='contactcardsprivacypolicy'/>
      <h2 className='main-text'>
        Contact Cards syncs data with its user's private iCloud storage, unless the user has 
        turned iCloud off for it.  The developer cannot access this data.  Contact Cards 
        connects to the internet to sync with iCloud.  Any changes to the privacy policy 
        of Contact Cards will be reflected here.
      </h2> 
      <br/>
      <br/>
      <br/>
    </main>
  );
}