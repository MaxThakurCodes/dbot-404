
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "."


client.on('ready', () => {
  console.log('I am ready!');
  client.channels.get('473634162381684737').send("I am awake!")
  client.user.setGame("being worked on by Max :)","https://twitch.tv/truexpixels");




});


client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  if (message.content === 'Hi') {
    message.channel.send('Hey there');
  }

  var args = message.content.substring(prefix.length).split(" ")

  switch (args[0].toLowerCase()){
    case "ping":
            message.channel.sendMessage("Pong!");
            break;
    case "embed":
        var embed = new Discord.RichEmbed()
        .addField("hey ", `${message.content.split(" ").slice(2).join(" ")}`)
        .setColor(0x03A9F4)
        message.channel.sendEmbed(embed)
        break;
     case "help":
          var embed = new Discord.RichEmbed()
          .setTitle("HELP")
          .setDescription("(ip)= in progress")
          .addField("Hi", "Bot replies: Hello there")
          .addField("ping","Bot replies: Pong! ")
          .addField("(ip)embed","Bot replies: hey i am jeff ")
          .addField("info","Bot replies: all of the info that Max has coded :)")
          .addField("leave", "bot replies never")
          .setColor(0X00FF00)
          message.author.send(embed)
          let embed2 = new Discord.RichEmbed()
          .addField("Help", "help has been sent!")
          .setColor(0X00FF00)
          message.channel.send(embed2)
          break;
      case 'info':
          var embed = new Discord.RichEmbed()
          .addField("404 No Name Bot","All the info for 404 No Name Bot " )
          .addField("Ping", Math.round(client.ping)+"ms")
          .addField("Users", client.users.size+" users")
          .addField("Servers", client.guilds.size+" servers")
          .addField("Creator", "Max made me he is the best bot dev <3")
          .setColor(0X0000FF)
          message.channel.send(embed)
          break;
      case "hi":
        message.channel.send('Hello there')
        break;
      case "leave":
        message.channel.send("never ;)")
        break;
        default:
        var embed3 = new Discord.RichEmbed()
        .setColor(0x0FF0000)
        .addField("404","invaild command do 404 help for help!")
        message.channel.send(embed3)
          break;


  };

});


client.login(odS3MHDSJZOo02yXG0YrqizzMV5YgQt7);
