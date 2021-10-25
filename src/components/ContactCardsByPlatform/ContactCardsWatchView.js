//Copyright  © 2020-2021  Matt Roberts

//import React
import React from 'react'

//import images
import ContactCardsWatchTable1 from '../../resources/ContactCardsWatch/ContactCardsWatchTable1.png'
import ContactCardsWatchTable2 from '../../resources/ContactCardsWatch/ContactCardsWatchTable2.png'
import ContactCardsWatchQRBlue from '../../resources/ContactCardsWatch/ContactCardsWatchQRBlue.png'
import ContactCardsWatchQRGreen from '../../resources/ContactCardsWatch/ContactCardsWatchQRGreen.png'
import ContactCardsWatchQRYellow from '../../resources/ContactCardsWatch/ContactCardsWatchQRYellow.png'
import ContactCardsWatchDetails from '../../resources/ContactCardsWatch/ContactCardsWatchDetails.png'

export default function ContactCardsWatchView(props) {
  return (
    <div className='text-align-center'>
      <h2 className="text-align-center">
        {props.info.header}
      </h2>
      <img src={ContactCardsWatchTable1} className="watch-media" alt="Main table view for contact cards 1"></img>
      <img src={ContactCardsWatchTable2} className="watch-media" alt="Main table view for contact cards 2"></img>
      <img src={ContactCardsWatchQRBlue} className="watch-media" alt="Blue contact QR code"></img>
      <img src={ContactCardsWatchQRGreen} className="watch-media" alt="Green contact QR code"></img>
      <img src={ContactCardsWatchQRYellow} className="watch-media" alt="Yellow contact QR code"></img>
      <h3 className="text-align-center">
        {props.info.detail}
      </h3>
      <img src={ContactCardsWatchDetails} className="watch-media" alt="Contact card details"></img>
      <br/>
      <br/>
      <br/>
    </div>
  )
}

