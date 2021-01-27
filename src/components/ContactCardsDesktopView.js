import React from 'react'
import ContactCardsMain from "../resources/ContactCardsMac/ContactCardsMain.png";
import ContactCardsQRCode from "../resources/ContactCardsMac/ContactCardsQRCode.png";
import { Carousel } from 'react-responsive-carousel';
import ContactCardsFields1 from "../resources/ContactCardsMac/ContactCardsFields1.png";
import ContactCardsFields2 from "../resources/ContactCardsMac/ContactCardsFields2.png";
import ContactCardsFields3 from "../resources/ContactCardsMac/ContactCardsFields3.png";
import ContactCardsFields4 from "../resources/ContactCardsMac/ContactCardsFields3.png";
import ContactCardColors from "../resources/ContactCardsMac/ContactCardsColors.png";

const ContactCardsTabletView=(props) => {
  return (
    <div className='text-align-center'>
      <img src={ContactCardsMain} className="iPad-media" alt="Contact Cards"></img>
      <h2 className="text-align-center">
          {props.info.header}
      </h2>
      <img src={ContactCardsQRCode} className="iPad-media" alt="Contact QR Code"></img>
      <h3 className="text-align-center">
        {props.info.qrCode}
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
            <img src={ContactCardsFields4} className="iPad-carousel-media" alt="Contact Cards third data input" />
          </div>
        </Carousel>
      </div>
      <h3 className="text-align-center">
        {props.info.sharableInfo}
      </h3>
      <img src={ContactCardColors} className="iPad-media" alt="Contact Cards color choices"></img>
      <h3 className="text-align-center">
        {props.info.colors}
      </h3>
      <br/><br/><br/>
    </div>
  )
}

export default ContactCardsTabletView