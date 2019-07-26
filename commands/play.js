const ytdl = require("ytdl-core");
const config = require("../config/config.json");
const prefix = config.prefix;
const queue = new Map();
const Discord = require * ("discord.js");
module.exports = class play {
    constructor() {
        this.name = "play",
            this.alias = ["pl"],
            this.usage = "<input>"
    }

    async run(client, message, args) {
        const serverQueue = queue.get(message.guild.id);
        if (!message.member.voiceChannel)
            return message.reply(
                "You have to be in a voice channel to use this command"
            );
        let voiceChannel = message.member.voiceChannel;

        const songInfo = await ytdl.getInfo(args[1]);
        const song = {
            title: songInfo.title,
            url: songInfo.video_url
        };
        if (!serverQueue) {
            const queueConstruct = {
                textChannel: message.channel,
                voiceChannel: voiceChannel,
                connection: null,
                songs: [],
                volume: 5,
                playing: true
            };

            queue.set(message.guild.id, queueConstruct);

            queueConstruct.songs.push(song);

            try {
                var connection = await voiceChannel.join();
                queueConstruct.connection = connection;
                playStream(message.guild, queueConstruct.songs[0])
            } catch (e) {
                console.error(`I couldn't join the voice channel: ${e}`);
                queue.delete(message.guild.id);
                return message.channel.send(`I couldn't join the voice channel: ${e}`);
            }
        } else {
            serverQueue.songs.push(song);
            return message.channel.send(`**${song.title}** had been added to the queue`);
        }
    }
};

function playStream(guild, song) {
    const serverQueue = queue.get(guild.id);
    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
    }

    const dispatcher = serverQueue.connection.playStream(ytdl(song.url, {
        highWaterMark: 1
    }, {
        filter: 'audioonly'
    }, {
        quality: 'highestaudio'
    }, {
        highWaterMark: 1 << 25
    })).on("end", () => {
        console.log('Song ended');
        serverQueue.songs.shift();
        playStream(guild, serverQueue.songs[0]);
    }).on('error', error => console.error(error));
    dispatcher.setVolumeLogarithmic(5 / 5);
}