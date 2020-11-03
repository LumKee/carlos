import React from 'react';
import ReactGA from 'react-ga';
import {
	Switch,
	Route,
	Redirect
} from 'react-router-dom';

import HomePage from './pages/HomePage';

ReactGA.initialize('G-X0D0H5VV93');
ReactGA.pageview('/home');

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