//Copyright  © 2020-2021  Matt Roberts

//import React
import React, { useEffect } from 'react';

export default function MathStudentPrivacyPolicy() {
  useEffect(()=>{document.title = "Celeritas Apps | Privacy Policy"})
  return (
    <main className={'main-background main-blue'}>
      <br/>
      <h2 className='main-text'>
        SwiftUI Design does not collect data from its users, and does not connect to the internet.  
        Any changes to the privacy policy of SwiftUI Design will be reflected here.
      </h2>
      <br/>
      <br/>
      <br/>
    </main>
  );
}