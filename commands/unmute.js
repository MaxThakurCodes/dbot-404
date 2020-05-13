const config = require("../config/config.json");
const prefix = config.prefix;
module.exports = class unmute {
    constructor() {
        this.name = "unmute",
            this.alias = ["um"],
            this.usage = `${prefix}unmute (user) (reason)`
    }

    run(client, message, args) {
    if (!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner){
        return message.channel.send(
          "You dont have permission to use this command"
        );
    }
      if (!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])){
        return message.channel.send(
          "I dont have the right permissions to use this command!"
        );
      }

      let unmutee =
        message.mentions.members.first() || message.guild.member.get(args[0]);

      if (!unmutee) return message.reply("Please add a member");
      if (!unmtee.member.roles.find(r => r.name === "Muted"))
        return message.reply("That user isnt muted");
      let UMreason = args.slice(1).join(" ");
      if (!reason) reason = "No reason give";

      let unmuteEmbed = new Discord.RichEmbed()
        .setColor([
          Math.floor(Math.random() * 256),
          Math.floor(Math.random() * 256),
          Math.floor(Math.random() * 256)
        ])
        .setAuthor(`${message.guild.name} ModLogs`, message.guild.iconURL)
        .addField("Moderation:", "Unmute")
        .addField("Unmutee:", mutee.user.username)
        .addField("Moderator:", message.author.username)
        .addField("Reason:", UMreason)
        .setFooter("Date:", message.createdAt);
      let uchannel = message.guild.channels.find(c => c.name === "logs");
      uchannel.send(unmuteEmbed);
    }
};
