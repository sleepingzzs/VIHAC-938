module.exports = {
	name: "random",
	async execute(interaction, client) {
		const command = client.commands.get(this.name);
		await interaction.message.edit({ components: [] });
		await command.execute(interaction.message, interaction.user);
	},
};
