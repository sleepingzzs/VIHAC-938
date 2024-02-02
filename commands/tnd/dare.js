const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
	name: "dare",
	async execute(message, author) {
		let dare = await fetch("https://api.truthordarebot.xyz/api/dare");
		dare = await dare.json();
		let tnd;
		try {
			tnd = new MessageEmbed()
				.setAuthor({
					name: "Requested by " + author.username,
					iconURL: author.displayAvatarURL(),
				})
				.setTitle(dare.question)
				.setFooter({ text: `Type: DARE | Rating: ${dare.rating}` })
				.setColor("BLURPLE");
		} catch (err) {
			tnd = new MessageEmbed()
				.setAuthor({
					name: "Requested by " + message.author.username,
					iconURL: message.author.displayAvatarURL(),
				})
				.setTitle(dare.question)
				.setFooter({ text: `Type: DARE | Rating: ${dare.rating}` })
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
