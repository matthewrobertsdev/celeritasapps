//Copyright  © 2020  Matt Roberts
import React from 'react';
import {Link} from 'react-router-dom'
const LargeAppIconLink = (props) => {
    return (<div className='icon-with-text'>
    <Link to={props.relativeLink}>
      <img src={props.image} className='large-icon' alt={props.alt}/>
    </Link>
    <Link to={props.relativeLink} className='text'>{props.name}</Link>
    </div>);
}
export default LargeAppIconLink;