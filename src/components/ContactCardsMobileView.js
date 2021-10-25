//Copyright  © 2020-2021  Matt Roberts

//import React
import React from 'react'

//import images
import ContactCardsMain from "../resources/ContactCardsiPhone/ContactCardsMain.png";
import ContactCardsQRCode from "../resources/ContactCardsiPhone/ContactCardsQRCode.png";
import ContactCardsDetail from "../resources/ContactCardsiPhone/ContactCardsDetail.png";
import ContactCardsFields1 from "../resources/ContactCardsiPhone/ContactCardsFields1.png";
import ContactCardsFields2 from "../resources/ContactCardsiPhone/ContactCardsFields2.png";
import ContactCardsFields3 from "../resources/ContactCardsiPhone/ContactCardsFields3.png";
import ContactCardsFields4 from "../resources/ContactCardsiPhone/ContactCardsFields4.png";
import ContactCardsFields5 from "../resources/ContactCardsiPhone/ContactCardsFields5.png";
import ContactCardsWidget from "../resources/ContactCardsiPhone/ContactCardsWidget.png";
import ContactCardsSiri from "../resources/ContactCardsiPhone/ContactCardsSiri.png";

//import images
import { Carousel } from 'react-responsive-carousel';

export default function ContactCardsMobileView(props) {
  return (
    <div className='text-align-center'>
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
      <div className="carousel">
        <Carousel showArrows={true} className="iPhone-carousel iPhone-carousel-media" thumbWidth={100}>
          <div>
            <img src={ContactCardsFields1} className="iPhone-carousel-media" alt="Contact Cards first data input" />
          </div>
          <div>
            <img src={ContactCardsFields2} className="iPhone-carousel-media" alt="Contact Cards second data input" />
          </div>
          <div>
            <img src={ContactCardsFields3} className="iPhone-carousel-media" alt="Contact Cards third data input" />
          </div>
          <div>
            <img src={ContactCardsFields4} className="iPhone-carousel-media" alt="Contact Cards fourth data input" />
          </div>
          <div>
            <img src={ContactCardsFields5} className="iPhone-carousel-media" alt="Contact Cards fourth data input" />
          </div>
        </Carousel>
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