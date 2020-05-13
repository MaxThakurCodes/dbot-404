const config = require("../config/config.json");
const prefix = config.prefix;
module.exports = class ban {
    constructor() {
        this.name = 'ban',
            this.alias = ["b"],
            this.usage = `${prefix}ban`
    }

    run(client, message, args) {
if (message.member.hasPermission("ADMINISTRATOR")) {
        const args = message.content
          .slice(prefix.length)
          .trim()
          .split(/ +/g);
        const command = args.shift().toLowerCase();
        let user = args[0];
        let user_name = client.fetchUser(user);
        let reason = args[1];
        if (!user) {
          return message.channel.send("Please include a name in the command");
        }
        if (!reason) {
          let reason = `${message.author.username} hasn't included a reason`;
          message.guild.ban(user, reason);
          var embed5 = new Discord.RichEmbed()
            .setColor("0x0FF0000")
            .setAuthor("Ban")
            .addField(
              `The admin ${message.author.tag} has banned ${user_name}.`
            )
            .setDescription(`${reason}`);
          client.channels.get("594473351443906581").send(embed5);
        } else {
          message.guild.unban(user, reason);
          var embed6 = new Discord.RichEmbed()
            .setColor("0x0FF0000")
            .setAuthor("Ban")
            .addField(`The admin ${message.author.tag} has banned ${user}`)
            .setDescription(`for reason ${reason}`);
          client.channels.get("594473351443906581").send(embed6);
        }
      } else {
        message.channel.send("I'm sorry who are you?");
      }
    }
}
