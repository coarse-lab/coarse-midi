import figlet from 'figlet';
import chalk from 'chalk';

export const logo = () =>
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
