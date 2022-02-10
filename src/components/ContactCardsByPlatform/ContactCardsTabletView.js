//Copyright  © 2020-2021  Matt Roberts

//import React
import React from 'react'

//import images
import DownloadOnTheAppStore from '../../resources/DownloadOnTheAppStore.png';
import ContactCardsMain1 from "../../resources/ContactCardsiPad/ContactCardsMain1.png";
import ContactCardsQRCode from "../../resources/ContactCardsiPad/ContactCardsQRCode.png";
import ContactCardsFields1 from "../../resources/ContactCardsiPad/ContactCardsFields1.png";
import ContactCardsWidget from "../../resources/ContactCardsiPad/ContactCardsWidget.png";
import ContactCardsSiri from "../../resources/ContactCardsiPad/ContactCardsSiri.png";

export default function ContactCardsTabletView(props) {
  return (
    <div className='text-align-center'>
      <a href='https://apps.apple.com/us/app/contact-cards/id1544693179'>
        <img src={DownloadOnTheAppStore} alt={'Download on the App Store'} 
          className='app-store-badge centered-image'/>
      </a>
      <h2 className="text-align-center">
          {props.info.header}
      </h2>
      <img src={ContactCardsMain1} className="iPad-media" alt="Contact Cards"></img>
      <h3 className="text-align-center">
        {props.info.qrCode}
      </h3>
      <img src={ContactCardsQRCode} className="iPad-media" alt="Contact QR Code"></img>
      <h3 className="text-align-center">
        {props.info.sharableInfo}
      </h3>
          <div>
            <img src={ContactCardsFields1} className="iPad-carousel-media" alt="Contact Cards first data input" />
          </div>
      <h3 className="text-align-center">
        {props.info.widget}
      </h3>
      <img src={ContactCardsWidget} className="iPad-media" alt="Contact Cards widget"></img>
      <h3 className="text-align-center">
        {props.info.siri}
      </h3>
      <img src={ContactCardsSiri} className="iPad-media" alt="Contact Cards show QR code with Siri"></img>
      <br/><br/><br/>
    </div>
  )
}