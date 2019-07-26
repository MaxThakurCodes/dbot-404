const Discord = require("discord.js");
const config = require("../config/config.json");
const prefix = config.prefix;
module.exports = class info {
    constructor() {
        this.name = 'info',
            this.alias = ["i", 'in'],
            this.usage = `${prefix}info`
    }

    run(client, message, args) {
      var embed = new Discord.RichEmbed()
        .addField("404 No Name Bot", "All the info for 404 No Name Bot ")
        .addField("Ping", Math.round(client.ping) + "ms")
        .addField("Users", client.users.size + " users")
        .addField("Servers", client.guilds.size + " servers")
        .addField("Creator", "Max made me he is the best bot dev <3")
        .setColor([
          Math.floor(Math.random() * 256),
          Math.floor(Math.random() * 256),
          Math.floor(Math.random() * 256)
        ]);
      message.channel.send(embed);
    }
}