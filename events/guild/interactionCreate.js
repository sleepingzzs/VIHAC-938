module.exports = {
	name: "interactionCreate",
	async execute(interaction, client) {
		if (interaction.isCommand()) return;
		const command = client.interactions.get(interaction.customId);

		try {
			await command.execute(interaction, client);
		} catch (error) {
			console.error(error);
			await interaction.reply({
				content: "e",
				ephemeral: true,
			});
		}
	},
};
