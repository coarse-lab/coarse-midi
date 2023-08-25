#!/usr/bin/env node
import React from 'react';
import { render } from 'ink';
import App from './app.js';
import { Provider } from './context/index.js';
import figlet from 'figlet';
import chalk from 'chalk';

console.clear();

figlet.text(
	"Coarse",
	{
		font: "Trek", // Trek   ANSI Regular
		horizontalLayout: "default",
		verticalLayout: "default",
		width: 100,
		whitespaceBreak: true,
	},
	function (err, data) {
		if (err) {
			console.log("Something went wrong...");
			console.dir(err);
			return;
		}
		console.log('\n\n\n\n\n', chalk.blue(data));
	}
);

setTimeout(() => {
	render(
		<Provider>
			<App />
		</Provider>
	);
}, 3000);



