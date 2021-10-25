//Copyright  © 2020-2021  Matt Roberts

//import React
import { useEffect } from "react";

//import useLocation from react-router-dom
import { useLocation } from "react-router-dom";

//scrolls to top on page load
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  //no view
  return null;
}