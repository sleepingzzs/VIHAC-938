const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
	name: "random",
	async execute(message, author) {
		let random;
		if (Math.floor(Math.random() * 2 + 1) === 1) {
			random = await fetch("https://api.truthordarebot.xyz/v1/truth");
		} else {
			random = await fetch("https://api.truthordarebot.xyz/api/dare");
		}
		random = await random.json();
		let tnd;
		try {
			tnd = new MessageEmbed()
				.setAuthor({
					name: "Requested by " + author.username,
					iconURL: author.displayAvatarURL(),
				})
				.setTitle(random.question)
				.setFooter({
					text: `Type: ${random.type} | Rating: ${random.rating}`,
				})
				.setColor("BLURPLE");
		} catch (err) {
			tnd = new MessageEmbed()
				.setAuthor({
					name: "Requested by " + message.author.username,
					iconURL: message.author.displayAvatarURL(),
				})
				.setTitle(random.question)
				.setFooter({
					text: `Type: ${random.type} | Rating: ${random.rating}`,
				})
				.setColor("BLURPLE");
		}

		const row = new MessageActionRow().addComponents(
			new MessageButton()
				.setLabel("Truth")
				.setStyle("SUCCESS")
				.setCustomId("truth"),
			new MessageButton()
				.setLabel("Dare")
				.setStyle("DANGER")
				.setCustomId("dare"),
			new MessageButton()
				.setLabel("Random")
				.setStyle("PRIMARY")
				.setCustomId("random")
		);
		await message.reply({
			embeds: [tnd],
			components: [row],
		});
	},
};
