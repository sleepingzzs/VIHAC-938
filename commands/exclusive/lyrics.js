const axios = require("axios");
const { MessageEmbed } = require("discord.js");
require("dotenv").config({ path: "../../.env" });
const key = process.env.rapidAPI;
module.exports = {
	name: "lyrics",
	async execute(message, args1, args2, commandName, client, query) {
		if (query === "") {
			message.channel.send("Please provide a song name!");
			return;
		}
		async function getId(que) {
			const options = {
				method: "GET",
				url: "https://genius-song-lyrics1.p.rapidapi.com/search/",
				params: {
					q: que,
					per_page: "1",
					page: "1",
				},
				headers: {
					"X-RapidAPI-Key": key,
					"X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
				},
			};
			const res = (await axios.request(options)).data.hits[0].result;
			return {
				title: res.full_title,
				thumbnail: res.header_image_thumbnail_url,
				id: res.id,
				type: res._type,
			};
		}
		async function getLyrics(id) {
			const options = {
				method: "GET",
				url: "https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/",
				params: { id: id },
				headers: {
					"X-RapidAPI-Key": key,
					"X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
				},
			};
			return (
				await axios.request(options)
			).data.lyrics.lyrics.body.html.replace(/(<([^>]+)>)/g, "");
		}
		try {
			const song = await getId(query);
			if (song.type !== "song") throw new Error();

			const lyrics = await getLyrics(song.id);

			const embed = new MessageEmbed()
				.setAuthor({
					name: "Requested by " + message.author.displayName,
					iconURL: message.author.displayAvatarURL(),
				})
				.setColor("BLURPLE")
				.setTitle(song.title)
				.setDescription(lyrics)
				.setThumbnail(song.thumbnail);

			message.channel.send({
				embeds: [embed],
			});
		} catch (error) {
			console.log(error);
			message.channel.send({
				content: "Something went wrong! couldn't find the lyrics.",
			});
		}
	},
};
