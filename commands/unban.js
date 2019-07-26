const config = require("../config/config.json");
const prefix = config.prefix;
module.exports = class unban {
    constructor() {
        this.name = 'unban',
            this.alias = ["ub"],
            this.usage = `${prefix}unban (user) (reason)`
    }

    run(client, message, args) {
if (message.member.hasPermission("ADMINISTRATOR")) {
        const args = message.content
          .slice(prefix.length)
          .trim()
          .split(/ +/g);
        const command = args.shift().toLowerCase();
        console.log(args);
        let user = args[0];
        let user_name = client.fetchUser(user);
        let reason = args[1];
        if (!user) {
          message.channel.send("Please include a name in the command");
        }
        if (!reason) {
          let reason = `${message.author.username} hasn't included a reason`;
          message.guild.unban(user, reason);
          let embed5 = new Discord.RichEmbed()
            .setTitle(`Unbanned ${user_name}`)
            .setColor([
              Math.floor(Math.random() * 256),
              Math.floor(Math.random() * 256),
              Math.floor(Math.random() * 256)
            ])
            .setAuthor("Unban")
            .addField(
              `The admin ${message.author.tag} has unbanned ${user}. ${reason}`
            );
          client.channels.get("594440172427411477").send(embed5);
        } else {
          message.guild.unban(user, reason);
          let embed6 = new Discord.RichEmbed()
            .setTitle(`Unbanned ${user.tag}`)
            .setColor([
              Math.floor(Math.random() * 256),
              Math.floor(Math.random() * 256),
              Math.floor(Math.random() * 256)
            ])
            .setAuthor("Unban")
            .setDescription(
              `The admin ${
                message.author.tag
              } has unbanned ${user}, for reason ${reason}`
            );
          client.channels.get("594440172427411477").send(embed6);
        }
      } else {
        message.channel.send("I'm sorry who are you?");
      }
    }
}