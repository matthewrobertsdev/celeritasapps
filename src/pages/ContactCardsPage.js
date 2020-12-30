//Copyright  © 2020  Matt Roberts
import React, { useEffect } from 'react';

const ContactCardsPage = () => {
  useEffect(()=>{document.title = "Contact Cards"})
  return (<main>
    <div className={'main-background main-blue'}>
      <div className="main-margin">
      <br></br>
      <h1 className="text-align-center title">
          Contact Cards
      </h1>
      </div>
      <br></br>
    </div>
    </main>)
}

export default ContactCardsPage
