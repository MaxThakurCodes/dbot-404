\const config = require("../config/config.json");
const prefix = config.prefix;
module.exports = class ping {
    constructor() {
        this.name = "send",
            this.alias = ["s"],
            this.usage = `${prefix}send (object)`
    }

    run(client, message, args) {
        if (args[1] === "nut") {
        message.channel.send(":chestnut:");
        message.channel.send("I gave you a nut");
      }
      if (args[1] === "fist") {
        message.channel.send(":punch:");
      }
    }
}
