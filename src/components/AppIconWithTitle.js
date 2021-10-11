//Copyright  © 2020  Matt Roberts
import React from 'react';
const AppIconWithTitle = (props) => {
    return (<div className='ten-percent-margin flex-center' id={props.id}>
      <img src={props.image} className='small-icon' alt={props.alt}/>
    <br></br>
    <h2 to={props.relativeLink} className='text heading small-margin'>
      {props.name}</h2>
    </div>);
}
export default AppIconWithTitle;