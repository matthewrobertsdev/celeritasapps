//Copyright  © 2020-2021  Matt Roberts

//import React
import React from 'react';

//import Link from react router dom
import {Link} from 'react-router-dom'

export default function LargeAppIconLink(props) {
  return (
    <div className='icon-with-text'>
      <Link to={props.relativeLink}>
        <img src={props.image} className='large-icon' alt={props.alt}/>
      </Link>
      <Link to={props.relativeLink} className='text'>
        {props.name}
      </Link>
    </div>);
}
