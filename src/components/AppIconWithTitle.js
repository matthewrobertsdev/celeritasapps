//Copyright  © 2020-2021  Matt Roberts

//import React
import React from 'react';

export default function AppIconWithTitle(props) {
  return (
    <div className='ten-percent-margin flex-center' id={props.id}>
      <img src={props.image} className='small-icon' alt={props.alt}/>
      <br/>
      <h2 to={props.relativeLink} className='text heading small-margin'>
        {props.name}
      </h2>
    </div>
  );
}
