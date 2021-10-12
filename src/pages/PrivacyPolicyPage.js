//Copyright  © 2020  Matt Roberts
import React, { useEffect } from 'react';
import ClockSuite256 from "../resources/ClockSuite256.png";
import ContactCards256 from "../resources/ContactCards256.png";

import AppIconWithTitle from '../components/AppIconWithTitle'
const PrivacyPolicyPage = () => {
    useEffect(()=>{document.title = "Celeritas Apps | Privacy Policy"})
        return (<main className={'main-background main-blue'}>
            <br></br>
            <h1 className='main-h-1'>
                Privacy Policies
                </h1>
                <AppIconWithTitle image={ClockSuite256} alt='Clock Suite App Icon' 
                name='Clock Suite Privacy Policy' id='clocksuiteprivacypolicy'/>
            <h2 className='main-text'>
              Clock Suite does not collect data from its users, and does not connect to the internet.  
              Any changes to the privacy policy of Clock Suite will be reflected here.
            </h2> 
            <AppIconWithTitle image={ContactCards256} alt='Contact Cards App Icon' 
                name='Contact Cards Privacy Policy' id='contactcardsprivacypolicy'/>
            <h2 className='main-text'>
                Contact Cards syncs data with its user's private iCloud storage, unless the user has 
                turned iCloud off for it.  The developer cannot access this data.  Contact Cards 
                connects to the internet to sync with iCloud.  Any changes to the privacy policy 
                of Contact Cards will be reflected here.
            </h2> 
            <br></br><br></br><br></br>
            </main>);
}
export default PrivacyPolicyPage;