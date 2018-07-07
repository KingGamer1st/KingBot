exports.run = (bot, msg, params) => {
    if (!params[0]) {
      msg.channel.sendCode("asciidoc", `= Command List =\n\n[Use ?help <commandname> for details]\n\n${bot.commands.map(c=>`${c.help.name}:: ${c.help.description}`).join("\n")}`);
  } else {
    let command = params[0];
    if(bot.commands.has(command)) {
      command = bot.commands.get(command);
      msg.channel.sendCode("asciidoc", `= ${command.help.name} = \n${command.help.description}\nUsage - ?${command.help.usage}\nExample - ?${command.help.example}`);
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
  name : "help",
  description: "Explains how certain commands work.",
  usage: "help [command]",
  example: "help bot"
};
