//Copyright  © 2020  Matt Roberts
import ClockSuite256 from "../resources/ClockSuite256.png";
import ContactCards256 from "../resources/ContactCards256.png";

import React, { useEffect } from 'react';
const HomePage = () => {
    useEffect(()=>{document.title = "Celeritas Apps"})
        return (<main className={'main-background main-blue'}>
            <br></br>
            <h1 className="text-align-center title">
                Celeritas Apps
                </h1>
            <h2 className='text-align-center'>
                Creator and Developer of Clock Suite and Contact Cards
            </h2>
              <div className='icon-container'>
              <div className='icon-with-text'>
                  <img src={ClockSuite256} className='large-icon' alt='Clock Suite App Icon'/>
                  <a href=''>Clock Suite</a>
                  </div>
                  <div className='icon-with-text'>
                  <img src={ContactCards256} className='large-icon' alt='Contact Cards App Icon'/>
                  <a href=''>Contact Cards</a>
                  </div>
              </div>
            <br></br><br></br><br></br>
            </main>);
}
export default HomePage;