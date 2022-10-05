const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription("Shows the requested user's avatar")
		.addUserOption(option =>
			option
				.setName('user')
				.setDescription('Select an user.')
				.setRequired(false)
		),

	async execute(interaction) {
		if (interaction.slashCommandName === 'avatar') {
			const user =
				interaction.options.getUser('user') || interaction.author;

			const avatarURL = user.avatarURL({ dynamic: true, size: 512 }); //default webp
			const avatarPNG = user.avatarURL({
				dynamic: true,
				size: 512,
				format: 'png',
			});
			const avatarJPG = user.avatarURL({
				dynamic: true,
				size: 512,
				format: 'jpg',
			});
			const avatarJPEG = user.avatarURL({
				dynamic: true,
				size: 512,
				format: 'jpeg',
			});

			const avatarEmbed = new MessageEmbed()
				.setAuthor({
					name: `${user.tag}`,
					iconURL: avatarURL,
				})
				.setDescription(
					`Avatar download links: \n[WEBP](${avatarURL}) | [PNG](${avatarPNG}) | [JPG](${avatarJPG}) | [JPEG](${avatarJPEG})`
				)
				.setColor('BLURPLE')
				.setImage(avatarURL)
				.setFooter({
					text: `Requested by ${interaction.user.username}`,
					iconURL: interaction.user.displayAvatarURL(true),
				})
				.setTimestamp();

			await interaction.reply({ embeds: [avatarEmbed] });
		}
	},
};
