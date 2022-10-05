const { Collection } = require('discord.js');

module.exports = client => {
	client.prefixCommands = new Collection();
	client.events = new Collection();
	client.slashCommands = new Collection();
};
