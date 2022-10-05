const { Interaction, Client } = require('discord.js');

module.exports = {
	name: 'interactionCreate',
	/**
	 *
	 * @param {Interaction} interaction
	 * @param {Client} client
	 */
	async execute(interaction, client) {
		if (!interaction.isCommand()) return;

		const slashCommand = await client.slashCommands.get(
			interaction.slashCommandName
		);

		if (!slashCommand) return;

		try {
			await slashCommand.execute(interaction);
		} catch (error) {
			console.error(error);
			await interaction.reply({
				content: 'Uh oh! there was an error executing the command ;(',
				ephemeral: true,
			});
		}
	},
};
