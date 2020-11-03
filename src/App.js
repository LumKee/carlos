import React from 'react';
import TagManager from 'react-gtm-module'
import {
	Switch,
	Route,
	Redirect
} from 'react-router-dom';

import HomePage from './pages/HomePage';

const tagManagerArgs = {
	gtmId: 'GTM-TRDPBBJ'
};
TagManager.initialize(tagManagerArgs)

const App = () => {

	return (
		<>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/home" component={HomePage} />

				<Redirect from="*" to="/404" />
			</Switch>
		</>
	);
};

export default App;