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
  let location = useLocation();
  const [menuBarsColor, setMenuBarColors]=useState("white")
  useEffect(()=> {
  window.addEventListener('resize', () => {setMenuShown(false)});
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    updateForColorSchemeChange();
});
  updateForColorSchemeChange();
  document.body.classList='blue'})

  const windowWidth=useWindowDimensions().width;

  const [menuShown, setMenuShown]=useState(false)


  if (windowWidth<440 && menuShown) {
    return (
      <span>
      <span className='header'>
        <nav className={"navigation-bar blue"}>
        <Link className={getClassNameLeft("/")} key={0} to="/">Celeritas Apps</Link>
        <Link to={location.pathname} id="menu-toggle" class="menu-toggle" aria-label="Close the menu" tabIndex={0}>
        <IconContext.Provider  value={{ color: menuBarsColor, className: "show-or-hide-menu float-right" }}>
        <IoIosClose onClick={()=>setMenuShown(false)}/>
        </IconContext.Provider>
        </Link>
        </nav>
        <nav className={"navigation-menu blue"}>
          <div className='centered'>
            <Link className={getClassNameMenu("/apps")} onClick={() => {setMenuShown(false)} }key={1} to="/apps">Apps</Link>
            <Link className={getClassNameMenu("/contact")} onClick={() => {setMenuShown(false)} } key={2} to="/contact">Contact</Link>
            <Link className={getClassNameMenu("/privacy")} onClick={() => {setMenuShown(false)} } key={3} to="/privacy">Privacy</Link>
            <Link className={getClassNameMenu("/faq")} onClick={() => {setMenuShown(false)} } key={4} to="/faq">FAQ</Link>
          </div>
      </nav>
      </span>
      <div className="spacer">
      </div>
      </span>
      )
  } else if (windowWidth<440 && !menuShown) {
    return (
      <span>
        <nav className={"navigation-bar blue header"}>
          <Link className={getClassNameLeft("/")} key={0} to="/">Celeritas Apps</Link>
          <Link to={location.pathname} id="menu-toggle" class="menu-toggle" aria-label="Open the menu" tabIndex={0}>
          <IconContext.Provider  value={{ color: menuBarsColor, className: "show-or-hide-menu float-right" }}>
        <IoIosMenu onClick={()=>setMenuShown(true)}/>
        </IconContext.Provider>
        </Link>
        </nav>
        <div className="spacer">
        </div>
        </span>
        )
  } else {
      return (
        <span>
        <nav className={"navigation-bar blue header"}>
        <Link className={getClassNameLeft("/")} key={0} to="/">Celeritas Apps</Link>
        <Link className={getClassNameLeft("/apps")} key={1} to="/apps">Apps</Link>
        <Link className={getClassNameLeft("/contact")} key={2} to="/contact">Contact</Link>
        <Link className={getClassNameLeft("/privacy")} key={3} to="/privacy">Privacy</Link>
        <Link className={getClassNameLeft("/faq")} key={4} to="/faq">FAQ</Link>
      </nav>
      <div className="spacer">
      </div>
      </span>
      )
  }

    //selected or unslected css style that floats left
  function getClassNameLeft(url) {
    if (url === location.pathname) {
      return 'selected-navigation-item top-navigation-item float-left top-navigation-link';
    } else {
      return 'top-navigation-item float-left top-navigation-link';
    }
  }

  function getClassNameMenu(url) {
    if (url === location.pathname) {
      return 'selected-menu-item menu-item top-navigation-link';
    } else {
      return 'menu-item top-navigation-link';
    }
  }

  function updateForColorSchemeChange() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setMenuBarColors("white");
    } else {
      setMenuBarColors("black");
    }
  }
}

//<MenuBars/><br></br>
export default withRouter(Header);