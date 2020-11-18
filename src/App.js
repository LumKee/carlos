import React from 'react';
import TagManager from 'react-gtm-module'

import {
    Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import { createMemoryHistory } from 'history';

import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import PrestationPage from './pages/PrestationPage';
import PromotionPage from './pages/PromotionPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const tagManagerArgs = {
    gtmId: 'GTM-TRDPBBJ'
};
if (process.browser) {
    TagManager.initialize(tagManagerArgs);
}

const history = createMemoryHistory();

const App = () => {

    return (
        <>
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/accueil" component={HomePage} />

                    <Route exact path="/produits" component={ProductPage} />
                    <Route exact path="/prestations" component={PrestationPage} />
                    <Route exact path="/promotions" component={PromotionPage} />
                    <Route exact path="/à-propos" component={AboutPage} />
                    <Route exact path="/contact" component={ContactPage} />

                    <Redirect from="*" to="/404" />
                </Switch>
            </Router>
        </>
    );
};

export default App;