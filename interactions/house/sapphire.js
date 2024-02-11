module.exports = {
	name: "sapphire",
	async execute(interaction, client) {
		async function role(rname) {
			return await interaction.guild.roles.cache.find(
				(r) => r.name === rname
			);
		}
		const member = await interaction.member;
		if (!member.roles.cache.has((await role(this.name)).id)) {
			await member.roles.add(await role(this.name));
			try {
				await member.roles.remove(await role("ruby"));
				await member.roles.remove(await role("emerald"));
				await member.roles.remove(await role("topaz"));
			} catch (error) {}

			await interaction.reply({
				content: "Assigned the role!",
				ephemeral: true,
			});
		} else {
			await member.roles.remove(await role(this.name));
			await interaction.reply({
				content: "Removed the role!",
				ephemeral: true,
			});
		}
	},
};
