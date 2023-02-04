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
        FAQ for Filter Art has not been created yet.
      </h2>
      <br/>
      <hr className='main-margin'/>
      <br/>
      <br/>
    </main>
  )
}