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
                <h2 className='main-text'> 
                Any changes to the privacy policies of Clock Suite and Contact Cards 
                will be reflected here.
            </h2>
                <AppIconWithTitle image={ClockSuite256} alt='Clock Suite App Icon' 
                name='Clock Suite Privacy Policy' id='clocksuiteprivacypolicy'/>
            <h2 className='main-text'>
              Clock Suite does not collect data from its users, and does not connect to the internet.
            </h2> 
            <AppIconWithTitle image={ContactCards256} alt='Contact Cards App Icon' 
                name='Contact Cards Privacy Policy' id='contactcardsprivacypolicy'/>
            <h2 className='main-text'>
                Contact Cards syncs data with its users' private iCloud storage, unless the user has 
                turned iCloud off for it.  It connects to the internet to sync with iCloud.
            </h2> 
            <br></br><br></br><br></br>
            </main>);
}
export default PrivacyPolicyPage;