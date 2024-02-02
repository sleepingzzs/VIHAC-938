const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
	name: "truth",
	async execute(message, author) {
		let truth = await fetch("https://api.truthordarebot.xyz/v1/truth");
		truth = await truth.json();
		let tnd;
		try {
			tnd = new MessageEmbed()
				.setAuthor({
					name: "Requested by " + author.username,
					iconURL: author.displayAvatarURL(),
				})
				.setTitle(truth.question)
				.setFooter({ text: `Type: TRUTH | Rating: ${truth.rating}` })
				.setColor("BLURPLE");
		} catch (err) {
			tnd = new MessageEmbed()
				.setAuthor({
					name: "Requested by " + message.author.username,
					iconURL: message.author.displayAvatarURL(),
				})
				.setTitle(truth.question)
				.setFooter({ text: `Type: TRUTH | Rating: ${truth.rating}` })
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
