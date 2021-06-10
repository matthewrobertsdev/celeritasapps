import React, { useEffect } from 'react';
import ClockSuite256 from "../resources/ClockSuite256.png";
import ContactCards256 from "../resources/ContactCards256.png";
import SmallAppIconLink from '../components/SmallAppIconLink'
const FAQ_Page = () => {
  useEffect(() => { document.title = "Celeritas Apps | FAQ" })
  return (
    <main className={'main-background main-blue'}>
      <br></br>
      <h1 className='main-h-1'>Frequently Asked Questions</h1>
      <hr className='main-margin'/>
      <SmallAppIconLink image={ClockSuite256} relativeLink='/faq/clocksuite'
                alt='Clock Suite App Icon' name='FAQ for Clock Suite' />
      <br></br><br></br>
      <SmallAppIconLink image={ContactCards256} relativeLink='/faq/contactcards'
                alt='Contact Cards App Icon' name='FAQ for Contact Cards' />
      <br></br><br></br>
      <hr className='main-margin'/>
      <br></br><br></br>
    </main>
  )
}

export default FAQ_Page