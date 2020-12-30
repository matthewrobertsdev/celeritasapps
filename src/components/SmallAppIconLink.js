//Copyright  © 2020  Matt Roberts
import React from 'react';
import {Link} from 'react-router-dom'
const SmallAppIconLink = (props) => {
    return (<div className='ten-percent-margin'>
    <Link to={props.relativeLink}>
      <img src={props.image} className='small-icon' alt={props.alt}/>
    </Link>
    <br></br>
    <Link to={props.relativeLink} className='text heading small-margin'>{props.name}</Link>
    </div>);
}
export default SmallAppIconLink;