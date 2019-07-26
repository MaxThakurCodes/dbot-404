const config = require("../config/config.json");
const prefix = config.prefix;
module.exports = class mute {
    constructor() {
        this.name = 'mute',
            this.alias = ["m"],
            this.usage = `${prefix}mute (user) (reason)`
    }

    run(client, message, args) {
if (!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner)
        return message.channel.send(
          "You dont have permission to use this command"
        );
      if (!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"]))
        return message.channel.send(
          "I dont have the right permissions to use this command!"
        );

      let mutee =
        message.mentions.members.first() || message.guild.member.get(args[0]);
      if (!mutee)
        return message.channel.send("Please provide a user to get muted");

      let reason = args.slice(1).join(" ");
      if (!reason) reason = "No reason given";

      let muterole = message.guild.roles.find(r => r.name === "Muted");
      if (!muterole) {
        try {
          muterole = message.guild.createRole({
            name: "Muted",
            color: "#514f48",
            premissions: []
          });
          message.guild.channels.forEach(async (channel, id) => {
            await channel.overwritePermissions(muterole, {
              SEND_MESSAGES: false,
              ADD_REACTIONS: false,
              SEND_TTS_MESSAGES: false,
              ATTACH_FILES: false,
              SPEAK: false
            });
          });
        } catch (e) {
          console.log(e.stack);
        }
      }
      mutee.addRole(muterole.id).then(() => {
        message.delete();
        mutee.send(
          `Hello, you have been muted on the server ${
            message.guild.name
          } for: ${reason}`
        );
        message.channel.send(`${mutee.user.username} was sucessfully muted.`);
      });
      let embed = new Discord.RichEmbed()
        .setColor([
          Math.floor(Math.random() * 256),
          Math.floor(Math.random() * 256),
          Math.floor(Math.random() * 256)
        ])
        .setAuthor(`${message.guild.name} ModLogs`, message.guild.iconURL)
        .addField("Moderation:", "Mute")
        .addField("Mutee:", mutee.user.username)
        .addField("Moderator:", message.author.username)
        .setFooter("Date:", message.createdAt);

      let schannel = message.guild.channels.find(c => c.name === "logs");
      schannel.send(embed);
    }
}