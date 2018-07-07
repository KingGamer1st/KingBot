exports.run = (bot, msg, params) => {
    if (!params[0]) {
      msg.channel.sendCode("asciidoc", `Correct Usage: ?sheriff [emoji] [location] \nRᴇᴍᴇᴍʙᴇʀ ᴛʜᴀᴛ ʏᴏᴜ ᴄᴀɴ ᴏɴʟʏ ᴜsᴇ Dɪsᴄᴏʀᴅ sᴜᴘᴘᴏʀᴛᴇᴅ ᴇᴍᴏᴊɪs`);
  } else if (!params[1]) {
      msg.channel.sendCode("asciidoc", 'Please enter a location');
  } else {
      let char = params[0]
      var location = params.slice(1).join(" ")

    msg.channel.sendMessage(`⠀ ⠀ ⠀    🤠\n　   ${char}${char}${char}\n    ${char}   ${char}　${char}\n   👇 ${char}${char} 👇\n  　  ${char}　${char}\n　   ${char}　 ${char}\n　    👢     👢\nHowdy. I'm the sheriff of ${location}`);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
  
exports.help = {
  name: "sheriff",
  description: "Sherrif command similar to Every Sheriff Bot on Twitter.",
  usage: "sheriff [emoji] [location]",
  example: "sheriff \:poop: PoopsVille"
};
  