const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientID, guildID } = require('../config/config.json');
const { token } = require('../config/token.json');

/*module.exports = client => {
	const slashCommands = [];
	const slashCmdFolders = fs.readdirSync('./commands/slashCmds');

	for (const folder of slashCmdFolders) {
		const slashCmdFiles = fs
			.readdirSync(`./commands/slashCmds/${folder}`)
			.filter(file => file.endsWith('.js'));

		for (file of slashCmdFiles) {
			const slashCommand = require(`../commands/slashCmds/${folder}/${file}`);
			client.slashCommands.set(slashCommand.data.name, slashCommand);
			slashCommands.push(slashCommand.data.toJSON());
		}
	}
	const rest = new REST({ version: 9 }).setToken(token);
	rest.put(Routes.applicationGuildCommands(clientID, guildID), {
		body: slashCommands,
	})
		.then(() => console.log('Registered slash commands'))
		.catch(console.error);
};
*/

module.exports = client => {
	const slashCommands = [];
	const commandFiles = fs.readdirSync('./commands/slashCmds/');

	for (const file of commandFiles) {
		const slashCommand = require(`../commands/slashCmds/${file}`);
		client.slashCommands.set(slashCommand.data.name, slashCommand);
		slashCommands.push(slashCommand.data.toJSON());
	}

	const rest = new REST({ version: '10' }).setToken(token);
	rest.put(Routes.applicationGuildCommands(clientID, guildID), {
		body: slashCommands,
	})
		.then(() => console.log('Slash commands: ✔'))
		.catch(console.error);
};
