import React from 'react'
import ContactCardsMain from "../resources/ContactCardsiPhone/ContactCardsMain.png";
import ContactCardsQRCode from "../resources/ContactCardsiPhone/ContactCardsQRCode.png";
import ContactCardsDetail from "../resources/ContactCardsiPhone/ContactCardsDetail.png";

import { Carousel } from 'react-responsive-carousel';
import ContactCardsFields1 from "../resources/ContactCardsiPhone/ContactCardsFields1.png";
import ContactCardsFields2 from "../resources/ContactCardsiPhone/ContactCardsFields2.png";
import ContactCardsFields3 from "../resources/ContactCardsiPhone/ContactCardsFields3.png";
import ContactCardsFields4 from "../resources/ContactCardsiPhone/ContactCardsFields4.png";
import ContactCardColors from "../resources/ContactCardsiPhone/ContactCardsColors.png";
import ContactCardsWidget from "../resources/ContactCardsiPhone/ContactCardsWidget.png";


const ContactCardsMobileView=(props) => {
  return (
    <div className='text-align-center'>
      <img src={ContactCardsMain} className="iPhone-media" alt="Contact Cards Table View"></img>
      <h2 className="text-align-center">
          {props.info.header}
      </h2>
      <img src={ContactCardsDetail} className="iPhone-media" alt="Contact Card Detail"></img>
      <h3 className="text-align-center">
        {props.info.detail}
      </h3>
      <img src={ContactCardsQRCode} className="iPhone-media" alt="Contact QR Code"></img>
      <h3 className="text-align-center">
        {props.info.qrCode}
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
        </Carousel>
      </div>
      <h3 className="text-align-center">
        {props.info.sharableInfo}
      </h3>
      <img src={ContactCardColors} className="iPhone-media" alt="Contact Cards color choices"></img>
      <h3 className="text-align-center">
        {props.info.colors}
      </h3>
      <img src={ContactCardsWidget} className="iPhone-media" alt="Contact Cards widget"></img>
      <h3 className="text-align-center">
        {props.info.widget}
      </h3>
      <br/><br/><br/>
    </div>
  )
}

export default ContactCardsMobileView