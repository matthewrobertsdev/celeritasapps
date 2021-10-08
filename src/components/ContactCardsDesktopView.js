import React from 'react'
import ContactCardsMain1 from "../resources/ContactCardsMac/ContactCardsMain1.png";
import ContactCardsMain2 from "../resources/ContactCardsMac/ContactCardsMain2.png";
import ContactCardsQRCode from "../resources/ContactCardsMac/ContactCardsQRCode.png";
import { Carousel } from 'react-responsive-carousel';
import ContactCardsFields1 from "../resources/ContactCardsMac/ContactCardsFields1.png";
import ContactCardsFields2 from "../resources/ContactCardsMac/ContactCardsFields2.png";
import ContactCardsFields3 from "../resources/ContactCardsMac/ContactCardsFields3.png";
import ContactCardsFields4 from "../resources/ContactCardsMac/ContactCardsFields4.png";
import ContactCardsFields5 from "../resources/ContactCardsMac/ContactCardsFields5.png";
import ContactCardsFields6 from "../resources/ContactCardsMac/ContactCardsFields6.png";
import ContactCardColors from "../resources/ContactCardsMac/ContactCardsColors.png";
import ContactCardsWidget from "../resources/ContactCardsMac/ContactCardsWidget.png";


const ContactCardsTabletView=(props) => {
  return (
    <div className='text-align-center'>
      <h2 className="text-align-center">
          {props.info.header}
      </h2>
      <img src={ContactCardsMain1} className="iPad-media" alt="Contact Cards light mode"></img>
      <h3 className="text-align-center">
        {props.info.detail}
      </h3>
      <img src={ContactCardsMain2} className="iPad-media" alt="Contact Cards dark mode"></img>
      <h3 className="text-align-center">
        {props.info.qrCode}
      </h3>
      <img src={ContactCardsQRCode} className="iPad-media" alt="Contact Cards QR code"></img>
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
          <div>
            <img src={ContactCardsFields5} className="iPad-carousel-media" alt="Contact Cards fifth data input" />
          </div>
          <div>
            <img src={ContactCardsFields6} className="iPad-carousel-media" alt="Contact Cards sixth data input" />
          </div>
          
        </Carousel>
      </div>
      <h3 className="text-align-center">
        {props.info.widget}
      </h3>
      <img src={ContactCardsWidget} className="iPad-media" alt="Contact Cards widget"></img>
      <br/><br/><br/>
    </div>
  )
}

export default ContactCardsTabletView