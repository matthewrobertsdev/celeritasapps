import React from 'react'
import ContactCardsMain1 from "../resources/ContactCardsiPad/ContactCardsMain1.png";
import ContactCardsMain2 from "../resources/ContactCardsiPad/ContactCardsMain2.png";
import ContactCardsQRCode from "../resources/ContactCardsiPad/ContactCardsQRCode.png";
import { Carousel } from 'react-responsive-carousel';
import ContactCardsFields1 from "../resources/ContactCardsiPad/ContactCardsFields1.png";
import ContactCardsFields2 from "../resources/ContactCardsiPad/ContactCardsFields2.png";
import ContactCardsFields3 from "../resources/ContactCardsiPad/ContactCardsFields3.png";
import ContactCardsFields4 from "../resources/ContactCardsiPad/ContactCardsFields4.png";
import ContactCardsWidget from "../resources/ContactCardsiPad/ContactCardsWidget.png";
import ContactCardsSiri from "../resources/ContactCardsiPad/ContactCardsSiri.png";

const ContactCardsTabletView=(props) => {
  return (
    <div className='text-align-center'>
      <h2 className="text-align-center">
          {props.info.header}
      </h2>
      <img src={ContactCardsMain1} className="iPad-media" alt="Contact Cards"></img>
      <h3 className="text-align-center">
        {props.info.detail}
      </h3>
      <img src={ContactCardsMain2} className="iPad-media" alt="Contact Cards"></img>
      <h3 className="text-align-center">
        {props.info.qrCode}
      </h3>
      <img src={ContactCardsQRCode} className="iPad-media" alt="Contact QR Code"></img>
      <h3 className="text-align-center">
        {props.info.sharableInfo}
      </h3>
      <div className="carousel">
        <Carousel showArrows={true} className="iPhone-carousel iPad-carousel-media" thumbWidth={100}>
          <div>
            <img src={ContactCardsFields1} className="iPad-carousel-media" alt="Contact Cards first data input" />
          </div>
          <div>
            <img src={ContactCardsFields2} className="iPad-carousel-media" alt="Contact Cards second data input" />
          </div>
          <div>
            <img src={ContactCardsFields3} className="iPad-carousel-media" alt="Contact Cards third data input" />
          </div>
          <div>
            <img src={ContactCardsFields4} className="iPad-carousel-media" alt="Contact Cards fourth data input" />
          </div>
        </Carousel>
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

export default ContactCardsTabletView