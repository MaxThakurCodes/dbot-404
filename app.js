const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "404";
const readline = require('readline');

client.on('ready', () => {
  console.log('I am ready!');
  client.user.setActivity("being worked on by Max :)", "https://www.twitch.tv/maxworksatbestbuy");




});


client.on('message', function (message) {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  if (message.content === 'Hi') {
    message.channel.send('Hey there');
  }
  if (message.channel.type === 'dm') {
    console.log("[" + message.author.username + "]: " + message.content); //Message from : Message

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('REPLY TO ' + message.author.username + ': ', (answer) => {
      message.author.send(`${answer}`);
      rl.close();
    });
  }
  var args = message.content.substring(prefix.length).split(" ");
  switch (args[0].toLowerCase()) {
    case "ping":
      message.channel.sendMessage("Pong!");
      break;
    case "embed":
      var embed = new Discord.RichEmbed()
        .addField("hey ", `${message.content.split(" ").slice(2).join(" ")}`)
        .setColor(0x03A9F4);
      message.channel.sendEmbed(embed);
      break;
    case "help":
      var embed1 = new Discord.RichEmbed()
        .setTitle("HELP")
        .setDescription("(ip)= in progress")
        .addField("Hi", "Bot replies: Hello there")
        .addField("ping", "Bot replies: Pong! ")
        .addField("(ip)embed", "Bot replies: hey i am jeff ")
        .addField("info", "Bot replies: all of the info that Max has coded :)")
        .addField("leave", "bot replies never")
        .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)])
      message.author.send(embed1);
      var embed2 = new Discord.RichEmbed()
        .addField("Help", "help has been sent!")
        .setColor(0X00FF00);
      message.channel.send(embed2);
      break;
    case 'info':
      var embed3 = new Discord.RichEmbed()
        .addField("404 No Name Bot", "All the info for 404 No Name Bot ")
        .addField("Ping", Math.round(client.ping) + "ms")
        .addField("Users", client.users.size + " users")
        .addField("Servers", client.guilds.size + " servers")
        .addField("Creator", "Max made me he is the best bot dev <3")
        .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)])
      message.channel.send(embed3);
      break;
    case "unban":
      if (message.member.hasPermission("ADMINISTRATOR")) {
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
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
            .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)])
            .setAuthor('Unban')
            .addField(`The admin ${message.author.tag} has unbanned ${user}. ${reason}`);
          client.channels.get('594440172427411477').send(embed5);
        } else {
          message.guild.unban(user, reason);
          let embed6 = new Discord.RichEmbed()
            .setTitle(`Unbanned ${user.tag}`)
            .setColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)])
            .setAuthor('Unban')
            .setDescription(`The admin ${message.author.tag} has unbanned ${user}, for reason ${reason}`);
          client.channels.get('594440172427411477').send(embed6);
        }
      } else {
        message.channel.send("I'm sorry who are you?")
      }
      break;
    case "ban":
      if (message.member.hasPermission("ADMINISTRATOR")) {
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
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
          message.guild.ban(user, reason);
          var embed5 = new Discord.RichEmbed()
            .setColor("0x0FF0000")
            .setAuthor('Ban')
            .addField(`The admin ${message.author.tag} has banned ${user_name}.`)
            .setDescription(`${reason}`);
          client.channels.get('594473351443906581').send(embed5);
        } else {
          message.guild.unban(user, reason);
          var embed6 = new Discord.RichEmbed()
            .setColor('0x0FF0000')
            .setAuthor('Ban')
            .addField(`The admin ${message.author.tag} has banned ${user}`)
            .setDescription(`for reason ${reason}`);
          client.channels.get('594473351443906581').send(embed6);
        }
      } else {
        message.channel.send("I'm sorry who are you?")
      }
      break;
    case "hi":
      message.channel.send('Hello there');
      break;
    case "leave":
      message.channel.send("never ;)");
      break;
    default:
      var embed4 = new Discord.RichEmbed()
        .setColor(0x0FF0000)
        .addField("404", "invaild command do 404help for help!");
      message.channel.send(embed4);
      break;


  }

});


client.login(process.env.TOKEN);