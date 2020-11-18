import React from 'react';
import { hydrate } from 'react-dom';

import App from './App';
import ThemeProvider from './ui/src/theme/ThemeProvider'

hydrate(
	<ThemeProvider>
		<App />
	</ThemeProvider>,

	document.getElementById('root')
);