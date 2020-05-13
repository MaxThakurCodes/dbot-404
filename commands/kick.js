const config = require("../config/config.json");
const prefix = config.prefix;
module.exports = class kick {
    constructor() {
        this.name = "kick",
            this.alias = ["k"],
            this.usage = `${prefix}kick (user) (reason)`
    }

    run(client, message, args) {
    let kUser = message.guild.member(
        message.mentions.users.first() || message.guild.members.get(args[0])
      );
      if (!kUser) return message.channel.send("Couldn't find that user!");
      let kReason = args.join(" ").slice(23);
      if (!message.member.hasPermission("MANAGE_MESSAGES"))
        return message.channel.send("Who are you again?");
      if (kUser.hasPermission("MANAGE_MESSAGES"))
        return message.channel.send("Can't do that buddy! Sorry!");

      let kickEmbed = new Discord.RichEmbed()
        .setTitle("[LOGS] Kick")
        .setColor([
          Math.floor(Math.random() * 256),
          Math.floor(Math.random() * 256),
          Math.floor(Math.random() * 256)
        ])
        .addField("Kicked User", `${kUser} with ID: ${kUser.id}`)
        .addField(
          "Kicked By",
          `<@${message.author.id}> with ID: ${message.author.id}`
        )
        .addField("Kicked In", message.channel)
        .addField("Reason", kReason)
        .setFooter(message.createdAt);

      let logsChannel = message.guild.channels.find(`name`, "logs");
      if (!logsChannel)
        return message.channel.send("Couldn't find log channel");

      message.guild.member(kUser).kick(kReason);
      logsChannel.send(kickEmbed);
    }
}
