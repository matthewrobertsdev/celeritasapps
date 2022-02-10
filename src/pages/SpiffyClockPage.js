//Copyright  © 2020-2021  Matt Roberts

//import React
import React, { useEffect } from 'react';
import DownloadOnTheAppStore from '../resources/DownloadOnTheAppStore.png';
import SpiffyClockDarkRed from "../resources/SpiffyClock/DarkRed.png";
import SpiffyClockYellow from "../resources/SpiffyClock/Yellow.png";
import SpiffyClockGreenForeground from "../resources/SpiffyClock/GreenForeground.png";
import SpiffyClockDarkIndigo from "../resources/SpiffyClock/DarkIndigo.png";
import SpiffyClockLightColors from "../resources/SpiffyClock/LightColors.png";
import SpiffyClockDarkColors from "../resources/SpiffyClock/DarkColors.png";
import SpiffyClockSettings from "../resources/SpiffyClock/Settings.png";



export default function SpiffyClockPage() {
  useEffect(()=>{document.title = "Spiffy Clock"})
  return (
    <main>
      <div className={'main-background main-blue'}>
      <div className='text-align-center main-margin'>
        <div>
          <br/>
          <h1 className="text-align-center title">
            Spiffy Clock
          </h1>
          <hr/>
          <br/>
          <a href='https://apps.apple.com/us/app/spiffy-clock/id1602707841'>
        <img src={DownloadOnTheAppStore} alt={'Download on the App Store'} 
          className='app-store-badge centered-image'/>
      </a>
      <br/>
        <h2 className="text-align-center">
        Spiffy Clock puts the time and date front and center!  It allows display 
        with 9 built-in colors that can be displayed as the background or as the 
        text.  Choose from numerous settings exactly how you want the time and 
        date and day of the week displayed.  When the color choice is for the 
        background, the color will automatically change for light mode and 
        dark mode.
        </h2>
        <img src={SpiffyClockDarkRed} className="iPhone-media" 
        alt="Spiffy Clock Dark Red"></img>
        <img src={SpiffyClockYellow} className="iPhone-media" 
        alt="Spiffy Clock Yellow"></img>
        <img src={SpiffyClockGreenForeground} className="iPhone-media" 
        alt="Spiffy Clock Green Foreground"></img>
        <h2 className='text-align-center'>
        A useful night mode for use with dark mode allows you to display dark 
        text in dark mode.
        </h2>
        <img src={SpiffyClockDarkIndigo} className="iPhone-media" 
        alt="Spiffy Clock Indigo with Night Mode"/>
         <h2 className='text-align-center'>
         Color choices are red, orange, yellow, green, blue, indigo, purple,
         pink, and brown.
        </h2>
        <img src={SpiffyClockLightColors} className="iPhone-media" 
        alt="Spiffy Clock Light Colors"/>
        <img src={SpiffyClockDarkColors} className="iPhone-media" 
        alt="Spiffy Clock Dark Colors"/>
        <br/>
        <h2 className='text-align-center'>
        Time and date settings let you show/hide seconds, use 24 hour/12 hour time, 
        show/hide date and show/hide day of the weeek, and use a numerical date.
        </h2>
        <img src={SpiffyClockSettings} className="iPhone-media" 
        alt="Spiffy Clock Settings"/>
        <br/>
        <h2 className='text-align-center'>
        You can also hide the status bar if you want.
        </h2>
        <h2 className='text-align-center'>
        This app is a great compliment to the desktop app Clock Suite.  
        The same colors are used, so there is a consistent look and feel 
        across your devices.
        </h2>
        <h2 className='text-align-center'>
        If you are enjoying Spiffy Clock, please consider leaving a rating or review on 
        the App Store.  You have no idea how much it helps.  Thank you!
        </h2>
        <br/>
        </div>
      </div>
    </div>
  </main>
  )
}