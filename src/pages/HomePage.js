//Copyright  © 2020  Matt Roberts
import ClockSuite256 from "../resources/ClockSuite256.png";
import ContactCards256 from "../resources/ContactCards256.png";
import {Link} from 'react-router-dom';

import React, { useEffect } from 'react';
const HomePage = () => {
    useEffect(()=>{document.title = "Celeritas Apps"})
        return (<main className={'main-background main-blue'}>
            <br></br>
              <div className='icon-container'>
              <div className='icon-with-text'>
                  <Link to='/clocksuite'>
                    <img src={ClockSuite256} className='large-icon' alt='Clock Suite App Icon'/>
                  </Link>
                  <Link to='/clocksuite' className='main-text'>Clock Suite</Link>
                  </div>
                  <div className='icon-with-text'>
                  <Link to='/contactcards'>
                    <img src={ContactCards256} className='large-icon' alt='Contact Cards App Icon'/>
                  </Link>
                  <Link to='contactcards' className='main-text'>Contact Cards</Link>
                  </div>
              </div>
            <br></br><br></br><br></br>
            </main>);
}
export default HomePage;