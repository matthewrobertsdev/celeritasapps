//Copyright  © 2020-2021  Matt Roberts

//import React
import React from 'react';

//import router components
import {Route, Switch, HashRouter } from 'react-router-dom';

//import header and footer
import Header from './components/Header';
import Footer from './components/Footer';

//import scroll-to-top
import ScrollToTop from './components/ScrollToTop';

//import pages
import HomePage from './pages/HomePage';
import AppsPage from './pages/AppsPage';
import ClockSuitePage from './pages/ClockSuitePage';
import ContactCardsPage from './pages/ContactCardsPage';
import SpiffyClockPage from './pages/SpiffyClockPage';
import MathStudentPage from './pages/MathStudentPage'
import SwiftUIDesignPage from './pages/SwiftUIDesignPage'
import FilterArtPage from './pages/FilterArtPage'
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ClockSuitePrivacyPolicy from './pages/ClockSuitePrivacyPolicy';
import FAQ_Page from './pages/FAQ_Page';
import ClockSuite_FAQ_Page from './pages/ClockSuite_FAQ_Page';
import ContactCards_FAQ_Page from './pages/ContactCards_FAQ_Page';
import SpiffyClock_FAQ_Page from './pages/SpiffyClock_FAQ_Page';
import ContactCardsPrivacyPolicy from './pages/ContactCardsPrivacyPolicy';
import SpiffyClockPrivacyPolicy from './pages/SpiffyClockPrivacyPolicy';
import MathStudentPrivacyPolicy from './pages/MathStudentPrivacyPolicy';
import SwiftUIDesignPrivacyPolicy from './pages/SwiftUIDesignPrivacyPolicy';
import FilterArtPrivacyPolicy from './pages/FilterArtPrivacyPolicy';
import FilterArt_FAQ_Page from './pages/FilterArt_FAQ_Page';

export default function AppRouter() {
  return (
    <HashRouter basename='/'>
      <Header />
      <ScrollToTop/>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/apps" exact component={AppsPage}/>
        <Route path="/clocksuite" exact component={ClockSuitePage} />
        <Route path="/contactcards" exact component={ContactCardsPage} />
        <Route path="/spiffyclock" exact component={SpiffyClockPage} />
        <Route path="/mathstudent" exact component={MathStudentPage} />
        <Route path="/swiftuidesign" exact component={SwiftUIDesignPage} />
        <Route path="/filterart" exact component={FilterArtPage} />
        <Route path="/contact" exact component={ContactPage} />
        <Route path="/privacy" exact component={PrivacyPolicyPage} />
        <Route path="/privacy/clocksuite" exact component={ClockSuitePrivacyPolicy} />
        <Route path="/privacy/contactcards" exact component={ContactCardsPrivacyPolicy} />
        <Route path="/privacy/spiffyclock" exact component={SpiffyClockPrivacyPolicy} />   
        <Route path="/privacy/mathstudent" exact component={MathStudentPrivacyPolicy} />
        <Route path="/privacy/swiftuidesign" exact component={SwiftUIDesignPrivacyPolicy} />
        <Route path="/privacy/filterart" exact component={FilterArtPrivacyPolicy} />                                   
        <Route path="/faq" exact component={FAQ_Page} />
        <Route path="/faq/clocksuite" exact component={ClockSuite_FAQ_Page} />
        <Route path="/faq/contactcards" exact component={ContactCards_FAQ_Page} />
        <Route path="/faq/spiffyclock" exact component={SpiffyClock_FAQ_Page} />
        <Route path="/faq/filterart" exact component={FilterArt_FAQ_Page} />
        <Route component={HomePage} />
      </Switch>
      <Footer/>
    </HashRouter>
  );
}