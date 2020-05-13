const Discord = require("discord.js");
const readline = require("readline");
const { CommandHandler } = require("djs-commands");
const client = new Discord.Client();
const prefix = "404";
const CH = new CommandHandler({
  folder: __dirname + "/commands/",
  prefix: [`${prefix}`]
});
require("dotenv").config();

client.on("ready", () => {
  console.log("ready");
});

client.on("ready", () => {
  client.user.setPresence({
    game: {
      name: "the bot starting...",
      type: 2
    },
    status: "dnd"
  });
  
  var activites = [
    {
      name: "Maxthakur.com",
      type: 3,
      status: "idle"
    },
    {
      name: "with Max's code",
      type: 0,
      status: "dnd"
    },
    {
      name: `for ${prefix}help`,
      type: 2,
      status: "online"
    },
    {
      name: "Max die",
      type: 3,
      status: "idle"
    }
  ];

  let i = 0;

  setInterval(() => {
    client.user.setActivity(activites[i].name, {
      type: activites[i].type
    });
    client.user.setStatus(activites[i].status);
    i++;
    if (i === activites.length) {
      i = 0;
    }
  }, 25000);
  console.log(
    `Activity: ${activites[i].name}, Status: ${activites[i].status}, Type: ${
      activites[i].type
    }`
  );
});

client.on("message", async message => {
  if (message.author.bot) {
    return;
  }
  if (message.channel.type === "dm") {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question("REPLY TO " + message.author.username + ": ", answer => {
      message.author.send(`${answer}`);
      rl.close();
    });
  }
  if (!message.content.startsWith(prefix) || message.author.bot) {
    return;
  }
  var args = message.content.substring(prefix.length).split(" ");
  
});

client.on('message', (message) => {
    let args = message.content.split(" ");
    let command = args[0];
    let cmd = CH.getCommand(command);
    if (!cmd) {
      return;
    }
    try {
        cmd.run(client, message, args);
    } catch (e) {
        console.warn(e);
    }
});
client.login(process.env.TOKEN);
