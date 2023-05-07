//Copyright  © 2020-2021  Matt Roberts

//import React
import React, { useEffect } from 'react';

//import images
import FilterArt256 from "../resources/FilterArt256.png";

//import components
import AppIconWithTitle from '../components/AppIconWithTitle'

export default function ContactCards_FAQ_Page() {
  useEffect(() => { document.title = "Celeritas Apps | FAQ" })
  return (
    <main className={'main-background main-blue'}>
      <br/>
      <br/>
      <hr className='main-margin'/>
      <br/>
      <br/>
      <AppIconWithTitle image={FilterArt256} alt='Filter Art App Icon' 
        name='FAQ for Filter Art' id='filterart'/>
      <br/>
      <h2 className="text-align-center">
        Question: What is a filter in Filter Art?
      </h2>
      <h3 className="main-margin">
        Answer: Filter takes on two meanings in Filter Art.  First it is any of the individual properties 
        you can edit (hue, contrast, invert colors, color multiply, saturation, brightness, grayscale, 
        opacity, and blur).  Second, it is the conbination of all these properties that can be applied 
        to an image or saved for future use.
      </h3>
      <br/>
      <hr className='main-margin'/>
      <br/>
      <br/>
    </main>
  )
}