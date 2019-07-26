const config = require("../config/config.json");
const prefix = config.prefix;
module.exports = class ping {
    constructor() {
        this.name = 'embed',
            this.alias = ["em", "e"],
            this.usage = `${prefix}embed`
    }
    run(client, message, args) {
var embed = new Discord.RichEmbed()
        .addField(
          `${message.content
            .split(" ")
            .slice(1)
            .join(" ")}`,
          `${message.content
            .split(" ")
            .slice(2)
            .join(" ")}`
        )
        .setColor([
            Math.floor(Math.random() * 256),
            Math.floor(Math.random() * 256),
            Math.floor(Math.random() * 256)
        ]);
      message.channel.send(embed);
    }
}