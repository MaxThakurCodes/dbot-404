const config = require("../config/config.json");
const prefix = config.prefix;
module.exports = class report {
    constructor() {
        this.name = 'report',
            this.alias = ["re"],
            this.usage = `${prefix}report (user) (reason)`
    }
    run(client, message, args) {
    let rUser = message.guild.member(
        message.mentions.users.first() || message.guild.members.get(arg[0])
      );
      if (!rUser) return message.channel.send("Couldn't find that user!");
      let rReason = args.join(" ").slice(22);

      let reportEmbed = new Discord.RichEmbed()
        .setTitle("[LOGS] Reports")
        .setColor([
          Math.floor(Math.random() * 256),
          Math.floor(Math.random() * 256),
          Math.floor(Math.random() * 256)
        ])
        .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
        .addField(
          "Reported By",
          `${message.author} with ID: ${message.author.id}`
        )
        .addField("Channel", message.channel)
        .addField("Reason", rReason)
        .setFooter(message.createdAt);

      let RlogsChannel = message.guild.channels.find(`name`, "logs");
      if (!RlogsChannel)
        return message.channel.send("Couldn't find log channel");

      message.delete().catch(O_o => {});
      reportsChannel.send(reportEmbed);
    }
}