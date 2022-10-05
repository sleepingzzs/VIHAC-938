const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, Client } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription("Shows the bot's response time in ms"),

	/**
	 *
	 * @param {Client} client
	 * @param {CommandInteraction} interaction
	 */

	async execute(interaction) {
		if (interaction.slashCommandName === 'ping') {
			const msg = await interaction.reply({
				content: ':ping_pong: pong! 000ms',
				fetchReply: true,
			});

			await interaction.editReply(
				`:ping_pong: pong! ${
					msg.createdTimestamp - interaction.createdTimestamp
				}ms`
			);
		}
	},
};
