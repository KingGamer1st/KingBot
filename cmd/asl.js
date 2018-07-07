exports.run = (bot, msg, params) => {
    if (!params[0]) {
      msg.channel.sendCode("asciidoc", `Correct Usage: ?asl [age] [sex] [location]`);
    } else if (!params[1]) {
        msg.channel.sendCode("asciidoc", 'Please enter your sex');
    } else if (!params[2]) {
        msg.channel.sendCode("asciidoc", 'Please enter your location');
    } else {
        let age = params[0]
        let sex = params[1]
        let location = params.slice(2).join(" ")

        msg.channel.sendMessage(`Hello ${msg.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`)
        }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
  
exports.help = {
  name: "asl",
  description: "Age Sex Location command. Simple as that",
  usage: "asl [age] [sex] [location]",
  example: "asl 15 Male Great Britain"
};