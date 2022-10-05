const fs = require('fs');

module.exports = client => {
	const prefixCmdFolders = fs.readdirSync('./commands/prefixCmds');

	for (const folder of prefixCmdFolders) {
		const prefixCmdFiles = fs
			.readdirSync(`./commands/prefixCmds/${folder}`)
			.filter(file => file.endsWith('.js'));

		for (const file of prefixCmdFiles) {
			const prefixCommand = require(`../commands/prefixCmds/${folder}/${file}`);

			client.prefixCommands.set(prefixCommand.name, prefixCommand);
		}
	}
};
