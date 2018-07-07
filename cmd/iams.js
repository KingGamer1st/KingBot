exports.run = (bot, msg, params) => {
    if (!params[0]) {
      msg.channel.sendCode("asciidoc", `Correct Usage: ?iams [object]`);
  } else {
      let object = params[0]
    msg.channel.sendMessage(`I am more than just a ${object},\n\nI am an IAMS ${object}.`);
  }
};
  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
exports.help = {
    name: "iams",
    description: "IAMS command. I think you can imagine what this does.",
    usage: "iams [object]",
    example: "iams cat"
  };
  