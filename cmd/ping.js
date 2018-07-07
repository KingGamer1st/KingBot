exports.run = (bot, msg, params = []) => {
  msg.channel.sendMessage('Ping?')
    .then(message => {
      message.edit(`\:ping_pong: Pong! (took **${message.createdTimestamp - msg.createdTimestamp}ms**)`);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ping",
  description: "Ping/Pong command. I wonder what this does? 🤔",
  usage: "ping",
  example: "ping"
};
