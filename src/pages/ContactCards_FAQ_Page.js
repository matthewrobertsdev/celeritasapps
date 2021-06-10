import React, { useEffect } from 'react';
import ContactCards256 from "../resources/ContactCards256.png";
import AppIconWithTitle from '../components/AppIconWithTitle'
const FAQ_Page = () => {
  useEffect(() => { document.title = "Celeritas Apps | FAQ" })
  return (
    <main className={'main-background main-blue'}>
      <br></br><br></br>
      <hr className='main-margin'/>
      <br></br><br></br>
      <AppIconWithTitle image={ContactCards256} alt='Contact Cards App Icon' 
      name='FAQ for Contact Cards' id='contactcardsfaq'/>
      <br></br>
      <h2 className="text-align-center">
        Question: How is a contact shared from Contact Cards?
      </h2>
      <h3 className="main-margin">
        Answer: The contact is shared either virtually or by QR code.  Either way, the 
        information is stored in the vCard format, which works across device types.  Sharing 
        with devices outside of those made by Apple should not be a problem.  Please note that
        QR codes can only hold so much data so an extremely long contact may be unsharable by
        QR code.  Also, some smart phones may require the user to download a bar code scanner
        to scan a QR code.
      </h3>
      <br></br>
      <hr className='main-margin'/>
      <br></br><br></br>
    </main>
  )
}

export default FAQ_Page