import React, { useEffect } from 'react';
import ContactCards256 from "../resources/ContactCards256.png";
import AppIconWithTitle from '../components/AppIconWithTitle'
const FAQ_Page = () => {
  useEffect(() => { document.title = "Celeritas Apps | FAQ" })
  return (
    <main className={'main-background main-blue'}>
      <br></br><br></br>
      <hr className='main-margin'/>
      <br></br><br></br>
      <AppIconWithTitle image={ContactCards256} alt='Contact Cards App Icon' 
      name='FAQ for Contact Cards' id='contactcardsfaq'/>
      <br></br>
      <h2 className="text-align-center">
        Question: How is a contact shared from Contact Cards?
      </h2>
      <h3 className="main-margin">
        Answer: The contact is shared either virtually or by QR code.  Either way, the 
        information is stored in the vCard format, which works across device types.  Sharing 
        with devices outside of those made by Apple should not be a problem.  Please note that
        QR codes can only hold so much data so an extremely long contact may be unsharable by
        QR code.  Also, some smart phones may require the user to download a bar code scanner
        to scan a QR code.
      </h3>
      <h2 className="text-align-center">
        Question: How do I make sure my data is synced with iCloud?
      </h2>
      <h3 className="main-margin">
        Answer: Make sure you are logged into iCloud on the device you wish to 
        sync and give it time to sync.  You probably already are logged in.  
        Also, in Settings in iOS or System Preferences on Mac, under Apple ID, 
        make sure you have not disabled iCloud usage for Contact Cards.  You would 
        probably remember if you had done this.
      </h3>
      <h2 className="text-align-center">
        Question: How do I disable syncing Contact Cards with iCloud?
      </h2>
      <h3 className="main-margin">
        Answer: On iOS, open Settings, go to Apple ID, then select iCloud, and then scroll down
        untill you reach Contact Cards and flip the switch turn the toggle off.  On Mac, open System 
        Preferences, select Apple ID, and then select iCloud, and then select "Options..." 
        by iCloud Drive, and then scroll to Contact Cards, and deselect the checkbox by it.
      </h3>
      <h2 className="text-align-center">
        Question: How do I share a card virtually on Mac?
      </h2>
      <h3 className="main-margin">
        Answer: There are multiple ways to do so, depending on your use case.  You can select the
        share button in the toolbar or navigate to the "Share" menu item under the "Card" menu, and
        then share by Messages, Mail, or Airdrop.  You can also select a card, copy the vCard, and 
        paste it directly into an app that supports recieving pasted vCards, such as Gmail.  
        You can also drag and drop a card from your list of cards to the desktop or a folder 
        and then drag and drop it to an app that supports dropping in vCards, such as Outlook, 
        or add it as an attachment.  Lastly, you can go to the File menu, select 
        "Export as vCard...", and then save it to a file that may be added as an attachment 
        or dragged and dropped into an app as allowed by the app.
      </h3>
      <h2 className="text-align-center">
        Question: How do I delete my data from iCloud?
      </h2>
      <h3 className="main-margin">
        Answer: Make sure Contact Cards on your device is synced with iCloud.  Then, 
        tap the gear button on iOS beneath your list of cards, or click the gear button in the 
        toolbar on your Mac or the "Manage Data..." menu item under the File menu. From there,
        select "Delete All Cards from iCloud...", type "delete" in the text filed to confirm
        you wish to delete all cards, which can't be undone, and then select "Delete All 
        Cards from iCloud".  All Contact Cards will be deleted from iCloud (provided you are 
        connected to the internet), and will be erased from your other devices when they 
        sync.
      </h3>
      <br></br>
      <hr className='main-margin'/>
      <br></br><br></br>
    </main>
  )
}

export default FAQ_Page