import React from 'react';
import {
	Switch,
	Route,
	Redirect
} from 'react-router-dom';


import HomePage from './pages/HomePage';

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