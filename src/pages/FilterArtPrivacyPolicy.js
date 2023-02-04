//Copyright  © 2020-2021  Matt Roberts

//import React
import React, { useEffect } from 'react';

//import images
import FilterArt256 from "../resources/FilterArt256.png";

//import components
import AppIconWithTitle from '../components/AppIconWithTitle'

export default function ContactCardsPrivacyPolicy() {
  useEffect(()=>{document.title = "Celeritas Apps | Privacy Policy"})
  return (
    <main className={'main-background main-blue'}>
      <br/>
      <AppIconWithTitle image={FilterArt256} alt='Filter Art App Icon' 
        name='Filter Art Privacy Policy' id='filterartprivacypolicy'/>
      <h2 className='main-text'>
        Filter Art syncs saved or favorited filters with its user's private iCloud storage, 
        unless the user has turned iCloud off for it.  The developer cannot access this data.  
        Filter Art connects to the internet to sync saved or favorited filters with iCloud.  
        Any changes to the privacy policy of Filter Art will be reflected here.
      </h2> 
      <br/>
      <br/>
      <br/>
    </main>
  );
}