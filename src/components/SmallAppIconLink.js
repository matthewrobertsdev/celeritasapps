//Copyright  © 2020  Matt Roberts
import React from 'react';
import {HashLink} from 'react-router-hash-link'
const SmallAppIconLink = (props) => {
    return (<div className='ten-percent-margin'>
    <HashLink to={props.relativeLink}>
      <img src={props.image} className='small-icon' alt={props.alt}/>
    </HashLink>
    <br></br>
    <HashLink to={props.relativeLink} className='text heading small-margin'>{props.name}
    </HashLink>
    </div>);
}
export default SmallAppIconLink;