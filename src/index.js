import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import ThemeProviderOverride from './ui/ThemeProviderOverride'

hydrate(
	<ThemeProviderOverride>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ThemeProviderOverride>,

	document.getElementById('root')
);