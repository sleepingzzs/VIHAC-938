const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
	name: "roles",
	admin: true,
	async execute(message, args1, args2, commandName, client) {
		let embed, row;
		if (args1 === "house") {
			embed = new MessageEmbed()
				.setColor("BLURPLE")
				.setTitle("Pick ANY house of your choice")
				.setDescription(
					"🔴 Ruby \n\n🟢 Emerald\n\n🔵 Sapphire\n\n🟡 Topaz"
				);

			row = new MessageActionRow().addComponents(
				new MessageButton()
					.setLabel("🔴")
					.setStyle("SECONDARY")
					.setCustomId("ruby"),
				new MessageButton()
					.setLabel("🟢")
					.setStyle("SECONDARY")
					.setCustomId("emerald"),
				new MessageButton()
					.setLabel("🔵")
					.setStyle("SECONDARY")
					.setCustomId("sapphire"),
				new MessageButton()
					.setLabel("🟡")
					.setStyle("SECONDARY")
					.setCustomId("topaz")
			);
		} else {
			await message.channel.send("Invalid args!");
		}

		await message.channel.send({
			embeds: [embed],
			components: [row],
		});
		await message.delete(1000);
	},
};
