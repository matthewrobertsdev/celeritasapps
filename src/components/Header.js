//Copyright  © 2020  Matt Roberts
import React, { useEffect, useState } from 'react'
import {useSelector } from 'react-redux'
import {displayMenu} from '../store/DefaultReducerActions'
import { withRouter, Link, useLocation } from 'react-router-dom';
import {useWindowDimensions} from '../utils/useWindowDimensions';
import { IoIosMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { IconContext } from "react-icons";
import '../styles/App.css'
import '../styles/NavigationStyle.css'
import '../styles/Colors.css'
const Header = () => {
  const menuDisplayed=useSelector(state => state.misc.menuDisplayed)
  let location = useLocation();
  useEffect(()=> {
  window.addEventListener('resize', () => closeMenuAsNeeded());
  document.body.classList="blue"})

  const windowWidth=useWindowDimensions().width;

  const [menuShown, setMenuShown]=useState(false)

  if (windowWidth<440) {
    return (
      <span>
        <nav className={"navigation-bar blue"}>
        <Link className={getClassNameLeft("/")} key={0} to="/">Celeritas Apps</Link>
        {/*<IconContext.Provider value={{ color: "white", className: "show-or-hide-menu float-right" }}>
        <IoIosClose onClick={()=>setMenuShown(!menuShown)}/>
        </IconContext.Provider>
    */}
        </nav>
        <nav className={"navigation-menu blue"}>
        <Link className={getClassNameLeft("/apps")} key={1} to="/apps">Apps</Link>
        <Link className={getClassNameLeft("/contact")} key={2} to="/contact">Contact</Link>
        <Link className={getClassNameLeft("/privacy")} key={3} to="/privacy">Privacy</Link>
        <Link className={getClassNameLeft("/faq")} key={4} to="/faq">FAQ</Link>
      </nav>
      </span>
      )
  } /*else if (windowWidth<440 && !menuShown) {
    return (
        <nav className={"navigation-bar blue"}>
          <Link className={getClassNameLeft("/")} key={0} to="/">Celeritas Apps</Link>
          <IconContext.Provider value={{ color: "white", className: "show-or-hide-menu float-right" }}>
        <IoIosMenu onClick={()=>setMenuShown(!menuShown)}/>
        </IconContext.Provider>
        </nav>
        )
  } */else {
      return (
        <nav className={"navigation-bar blue"}>
        <Link className={getClassNameLeft("/")} key={0} to="/">Celeritas Apps</Link>
        <Link className={getClassNameLeft("/apps")} key={1} to="/apps">Apps</Link>
        <Link className={getClassNameLeft("/contact")} key={2} to="/contact">Contact</Link>
        <Link className={getClassNameLeft("/privacy")} key={3} to="/privacy">Privacy</Link>
        <Link className={getClassNameLeft("/faq")} key={4} to="/faq">FAQ</Link>
      </nav>)
  }
    function closeMenuAsNeeded(){
      if(menuDisplayed&&window.innerWidth>600){
        displayMenu(false)
      }
    }

    //selected or unslected css style that floats left
function getClassNameLeft(url) {
  if (url === location.pathname) {
    return 'selected-navigation-item top-navigation-item float-left top-navigation-link';
  } else {
    return 'top-navigation-item float-left top-navigation-link';
  }
}
}

//<MenuBars/><br></br>
export default withRouter(Header);