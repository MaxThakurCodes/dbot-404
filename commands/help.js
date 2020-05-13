const Discord = require("discord.js");
const config = require("../config/config.json");
const prefix = config.prefix;
module.exports = class help {
    constructor() {
        this.name = "help",
            this.alias = ["?", 'h'],
            this.usage = `${prefix}help`
    }

    run(client, message, args) {
    var embed = new Discord.RichEmbed()
        .setDescription(`The prefix is ${prefix}`)
        .setTitle("HELP")
        .addField("Hi", "Bot replies: Hello there")
        .addField("ping", "Bot replies: Pong! ")
        .addField("(ip)embed", "Bot replies: hey i am jeff ")
        .addField("info", "Bot replies: all of the info that Max has coded :)")
        .addField("Ban", "Usage: ban (mention user) (reason)")
        .addField("Unban", "Usage: unban (userID) (Reason)")
        .addField("Mute", "Usage: mute (mention user) (reason)")
        .addField("Unmute", "Usage: unmute (mention user) (reason)")
        .addField("kick", "Usage: kick (mention user) (reason)")
        .setColor([
          Math.floor(Math.random() * 256),
          Math.floor(Math.random() * 256),
          Math.floor(Math.random() * 256)
        ]);
      message.author.send(embed);
      var embed1 = new Discord.RichEmbed()
        .addField("Help", "help has been sent!")
        .setColor([255, 0, 0]);
      message.channel.send(embed1);
    }
}
