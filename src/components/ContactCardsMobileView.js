import React from 'react'
import ContactCardsMain from "../resources/ContactCardsMain.png";
import ContactCardsQRCode from "../resources/ContactCardsQRCode.png";


const ContactCardsMobileView=(props) => {
  return (
    <div className='text-align-center'>
      <img src={ContactCardsMain} className="iPhone-media" alt="Contact Cards"></img>
      <h2 className="text-align-center">
          {props.info.header}
      </h2>
      <img src={ContactCardsQRCode} className="iPhone-media" alt="Contact QR Code"></img>
      <br/><br/><br/>
    </div>
  )
}

export default ContactCardsMobileView