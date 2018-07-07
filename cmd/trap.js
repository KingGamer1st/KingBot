exports.run = (bot, msg, params) => {
    if (!params[0]) {
      msg.channel.sendCode("asciidoc", `Correct Usage: ?trap [name]`);
  } else {
    var name = params.join(" ");
    var number = Math.floor(Math.random() * 2);
    switch (number) {
      case 0:
      msg.channel.sendMessage('\:thinking:')
        .then(message => {
          message.edit(`Yes, ${name} is a trap... \:thumbsdown:`);
        });
          break;
      case 1:
      msg.channel.sendMessage('\:thinking:')
        .then(message => {
          message.edit(`No, ${name} is not a trap. \:thumbsup:`);
        });
          break;
  }
  }
};
  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
exports.help = {
    name: "trap",
    description: "Used to definitively prove if someone is or is not a trap.",
    usage: "trap [name]",
    example: "trap Thomas"
  };
  