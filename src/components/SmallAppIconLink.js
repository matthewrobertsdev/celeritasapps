//Copyright  © 2020-2021  Matt Roberts

//import React
import React from 'react';

//import HashLink from react router hask link
import {HashLink} from 'react-router-hash-link'

export default function SmallAppIconLink(props) {
    return (
    <div className='ten-percent-margin flex-center'>
      <HashLink to={props.relativeLink}>
        <img src={props.image} className='small-icon' alt={props.alt}/>
      </HashLink>
      <br/>
      <HashLink to={props.relativeLink} className='text heading small-margin'>
        {props.name}
      </HashLink>
    </div>
  );
}
