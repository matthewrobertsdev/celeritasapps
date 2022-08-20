//Copyright  © 2020-2021  Matt Roberts

//import React
import React from 'react'

//import images
import DownloadOnTheAppStore from '../../resources/DownloadOnTheAppStore.png';
import ContactCardsMain from "../../resources/ContactCardsiPhone/ContactCardsMain.png";
import ContactCardsQRCode from "../../resources/ContactCardsiPhone/ContactCardsQRCode.png";
import ContactCardsDetail from "../../resources/ContactCardsiPhone/ContactCardsDetail.png";
import ContactCardsFields1 from "../../resources/ContactCardsiPhone/ContactCardsFields1.png";
import ContactCardsWidget from "../../resources/ContactCardsiPhone/ContactCardsWidget.png";
import ContactCardsSiri from "../../resources/ContactCardsiPhone/ContactCardsSiri.png";

//import images
import { Carousel } from 'react-responsive-carousel';

export default function ContactCardsMobileView(props) {
  return (
    <div className='text-align-center'>
      <a href='https://apps.apple.com/us/app/contact-cards/id1544693179'>
        <img src={DownloadOnTheAppStore} alt={'Download on the App Store'} 
          className='app-store-badge centered-image'/>
      </a>
      <h2 className="text-align-center">
          {props.info.header}
      </h2>
      <img src={ContactCardsMain} className="iPhone-media" alt="Contact Cards Table View"></img>
      <h3 className="text-align-center">
        {props.info.detail}
      </h3>
      <img src={ContactCardsDetail} className="iPhone-media" alt="Contact Card Detail"></img>
      <h3 className="text-align-center">
        {props.info.qrCode}
      </h3>
      <img src={ContactCardsQRCode} className="iPhone-media" alt="Contact QR Code"></img>
      <h3 className="text-align-center">
        {props.info.sharableInfo}
      </h3>
     <div>
            <img src={ContactCardsFields1} className="iPhone-carousel-media" alt="Contact Cards first data input" />
          </div>
      <h3 className="text-align-center">
        {props.info.widget}
      </h3>
      <img src={ContactCardsWidget} className="iPhone-media" alt="Contact Cards QR code widget"></img>
      <h3 className="text-align-center">
        {props.info.siri}
      </h3>
      <img src={ContactCardsSiri} className="iPhone-media" alt="Contact Cards show QR code with Siri"></img>
      <br/><br/><br/>
    </div>
  )
}