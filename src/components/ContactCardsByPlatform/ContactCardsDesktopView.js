//Copyright  © 2020-2021  Matt Roberts

//import React
import React from 'react'

//import images
import DownloadOnMacAppStore from '../../resources/DownloadOnMacAppStore.png';
import ContactCardsMain1 from "../../resources/ContactCardsMac/ContactCardsMain1.png";
import ContactCardsMain2 from "../../resources/ContactCardsMac/ContactCardsMain2.png";
import ContactCardsQRCode from "../../resources/ContactCardsMac/ContactCardsQRCode.png";
import ContactCardsFields1 from "../../resources/ContactCardsMac/ContactCardsFields1.png";
import ContactCardsFields2 from "../../resources/ContactCardsMac/ContactCardsFields2.png";
import ContactCardsFields3 from "../../resources/ContactCardsMac/ContactCardsFields3.png";
import ContactCardsFields4 from "../../resources/ContactCardsMac/ContactCardsFields4.png";
import ContactCardsFields5 from "../../resources/ContactCardsMac/ContactCardsFields5.png";
import ContactCardsFields6 from "../../resources/ContactCardsMac/ContactCardsFields6.png";
import ContactCardsWidget from "../../resources/ContactCardsMac/ContactCardsWidget.png";

//import Carousel
import { Carousel } from 'react-responsive-carousel';

export default function ContactCardsTabletView(props) {
  return (
    <div className='text-align-center'>
      <a href='https://apps.apple.com/us/app/contact-cards/id1544693179'>
        <img src={DownloadOnMacAppStore} alt={'Download on Mac App Store'} 
          className='mac-app-store-badge centered-image'/>
      </a>
      <h2 className="text-align-center">
          {props.info.header}
      </h2>
      <img src={ContactCardsMain1} className="iPad-media" alt="Contact Cards light mode"></img>
      <h3 className="text-align-center">
        {props.info.qrCode}
      </h3>
      <img src={ContactCardsQRCode} className="iPad-media" alt="Contact Cards QR code"></img>
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
      <br/>
      <br/>
      <br/>
    </div>
  )
}