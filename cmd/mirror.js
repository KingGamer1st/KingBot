exports.run = (bot, msg, params) => {
    if (!params[0]) {
      msg.channel.sendCode("asciidoc", `Correct Usage: ?mirror (parameter) [text]`);
  } else {
      if (params[0] === "delete") {
        if (!params[1]) {
            msg.channel.sendCode("asciidoc", 'Please enter text to be mirrored');
        }
        else {
            let text = params.slice(1).join(" ");
            msg.delete()
            msg.channel.sendMessage(`${text}`)
        }
      }
      else {
            let text = params.slice(0).join(" ");
            msg.channel.sendMessage(`${text}`)
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
    name: "mirror",
    description: "Command that will have the bot mirror whatever you say. Use the delete parameter to have your message deleted.",
    usage: "mirror (parameter) [text]",
    example: "mirror Stop copying me!"
  };
  