//Copyright  © 2020  Matt Roberts
import React, { useEffect } from 'react';
const PrivacyPolicyPage = () => {
    useEffect(()=>{document.title = "Clock Suite | Privacy Policy"})
        return (<main className={'main-background main-blue'}>
            <br></br>
            <h1 className='main-h-1'>
                Privacy Policy
                </h1>
            <h2 className='main-text'>
                I, Matt Roberts, collect log data as allowed by the users of Clock Suite 
                and provided by Apple.  I do not collect any data on my own 
                from the use of Clock Suite by its users.
            </h2>
            <br></br><br></br><br></br>
            </main>);
}
export default PrivacyPolicyPage;