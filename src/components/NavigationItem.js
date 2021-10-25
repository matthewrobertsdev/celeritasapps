//Copyright  © 2020-2021  Matt Roberts

//import React
import React from 'react'

export default function NavigationItem(props) {
    return(
    <li className={props.styleName}>
      <a className={"top-navigation-link"} href={props.URL}>
        {props.title}
      </a>
    </li>);
}
