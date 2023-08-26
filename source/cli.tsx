#!/usr/bin/env node
import React from 'react';
import App from './app.js';
import { render } from 'ink';
import { Provider } from './context/index.js';
import { logo } from './components/Logo/index.js';

console.clear();

logo();

setTimeout(() => {
	render(
		<Provider>
			<App />
		</Provider>
	);
}, 3000);



