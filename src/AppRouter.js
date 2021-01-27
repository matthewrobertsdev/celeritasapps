//Copyright  © 2020  Matt Roberts
import React from 'react';
import {Route, Switch, HashRouter } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage'
import AppsPage from './pages/AppsPage'
import ClockSuitePage from './pages/ClockSuitePage'
import ContactCardsPage from './pages/ContactCardsPage'
import ContactPage from './pages/ContactPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import FAQ_Page from './pages/FAQ_Page'
import ScrollToTop from './components/ScrollToTop'

import Footer from './components/Footer'
const AppRouter = () => {
    return (
        <HashRouter basename='/'>
                <Header />
                <ScrollToTop/>
                <Switch>
                <Route path="/" exact component={HomePage} />
                    {/*<Route path="/about" exact component={AboutPage} />*/}
                    <Route path="/apps" exact component={AppsPage}/>
                    <Route path="/clocksuite" exact component={ClockSuitePage} />
                    <Route path="/contactcards" exact component={ContactCardsPage} />
                    <Route path="/contact" exact component={ContactPage} />
                    <Route path="/privacy" exact component={PrivacyPolicyPage} />
                    <Route path="/faq" exact component={FAQ_Page} />
                    <Route component={HomePage} />
                </Switch>
                <Footer/>
        </HashRouter>
    );
}
export default AppRouter;