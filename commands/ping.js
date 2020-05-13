const config = require("../config/config.json");
const Discord = require("discord.js");
const prefix = config.prefix;
module.exports = class ping {
    constructor() {
        this.name = "ping",
            this.alias = ["ping"],
            this.usage = `${prefix}ping`
    }
    run(client, message, args) {
        var embed1 = new Discord.RichEmbed()
        .setTitle("Pong")
        .addField(":ping_pong:");
        var embed2 = new Discord.RichEmbed().setColor([
            Math.floor(Math.random() * 256),
            Math.floor(Math.random() * 256),
            Math.floor(Math.random() * 256)
        ])
        .addField("Ping", Math.round(client.ping) + "ms");
    message.channel;
            message.react('🇴').then(() => message.react('🅾'));

        const filter = (reaction, user) => {
            return ['🇴', '🅾'].includes(reaction.emoji.name) && user.id === message.author.id;
        };

        message.awaitReactions(filter, {
                max: 1,
                time: 60000,
                errors: ['time']
            })
            .then(collected => {
                const reaction = collected.first();

                if (reaction.emoji.name === '🅾') {
                    message.send(embed2);
                } else {
                    message.send(embed1);
                }
            })
            .catch(collected => {
                message.reply('you reacted with neither a thumbs up, nor a thumbs down.');
            });
    }
};
