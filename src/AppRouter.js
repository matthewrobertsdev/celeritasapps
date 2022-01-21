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
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ClockSuitePrivacyPolicy from './pages/ClockSuitePrivacyPolicy';
import FAQ_Page from './pages/FAQ_Page';
import ClockSuite_FAQ_Page from './pages/ClockSuite_FAQ_Page';
import ContactCards_FAQ_Page from './pages/ContactCards_FAQ_Page';
import ContactCardsPrivacyPolicy from './pages/ContactCardsPrivacyPolicy';
import SpiffyClockPrivacyPolicy from './pages/SpiffyClockPrivacyPolicy'

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
        <Route path="/contact" exact component={ContactPage} />
        <Route path="/privacy" exact component={PrivacyPolicyPage} />
        <Route path="/privacy/clocksuite" exact component={ClockSuitePrivacyPolicy} />
        <Route path="/privacy/contactcards" exact component={ContactCardsPrivacyPolicy} />
        <Route path="/privacy/spiffyclock" exact component={SpiffyClockPrivacyPolicy} />                                     
        <Route path="/faq" exact component={FAQ_Page} />
        <Route path="/faq/clocksuite" exact component={ClockSuite_FAQ_Page} />
        <Route path="/faq/contactcards" exact component={ContactCards_FAQ_Page} />
        <Route component={HomePage} />
      </Switch>
      <Footer/>
    </HashRouter>
  );
}