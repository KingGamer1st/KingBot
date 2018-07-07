const Discord = require('discord.js');

exports.run = (bot, msg, params) => {
    if (!params[0]) {
        msg.channel.sendCode("asciidoc", `Correct Usage: ?bot [function] (input) \nᴛʀʏ ?ʙᴏᴛ ʜᴇʟᴘ`);
    } else {
      let func = params[0].toLowerCase();

      if (func === "avatar") {
        var avatarURL = params.slice(1).join(" ")
        if (!avatarURL) {
            msg.channel.sendCode("asciidoc", `Correct Usage: ?bot avatar <avatar URL>`);
        } else
            if (avatarURL.endsWith(".png")) {
                bot.user.setAvatar(`${avatarURL}`);
                msg.channel.sendEmbed({
                    "title": "Avatar set to:",
                    "image": {
                        "url": `${avatarURL}`
                      }
                }); 
            } else if (avatarURL.endsWith(".jpg")) {
                bot.user.setAvatar(`${avatarURL}`);
                msg.channel.sendEmbed({
                    "title": "Avatar set to:",
                    "image": {
                        "url": `${avatarURL}`
                      }
                }); 
            } else if (avatarURL.endsWith(".jpeg")) {
                bot.user.setAvatar(`${avatarURL}`);
                msg.channel.sendEmbed({
                    "title": "Avatar set to:",
                    "image": {
                        "url": `${avatarURL}`
                      }
                }); 
            } else {
                msg.channel.sendEmbed({
                    "color": 10038562,
                    "title": "\:no_entry_sign: URL doesn't point to an image",
                    "description": "Make sure the avatar URL ends with .png, .jpg or .jpeg"
                    });
            }

    } else if (func === "info") {
        msg.channel.sendCode("asciidoc", `INFORMATION\n• Name           : KingBot\n• Date Created   : 26/05/2018\n• Created By     : King 👑#4440\n• Version        : v1.1.2\n• Date Updated   : 07/07/2018\n• What's New     : Bot's avatar can now be changed, Finn added to ?info`);

    } else if (func === "name") {
        var name = params.slice(1).join(" ")
        if (!name) {
            msg.channel.send("**Name reset**\nUse *?bot name <name>* to change the name.");
            msg.guild.members.get(bot.user.id).setNickname(`${name}`);
        } else {
            msg.guild.members.get(bot.user.id).setNickname(`${name}`);
            msg.channel.sendMessage(`Name set to: *${name}*`);
        }

    } else if (func === "stats") {
        let totalSeconds = (bot.uptime / 1000);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.round(totalSeconds % 60);
        let botUptime = `${hours}h, ${minutes}m, ${seconds}s`;

        msg.channel.sendCode("asciidoc", `STATISTICS\n• Uptime       : ${botUptime}\n• Servers      : ${bot.guilds.size}\n• Users        : ${bot.users.size}\n• Channels     : ${bot.channels.size}\n• Discord.js   : v${Discord.version}\n• Mem Usage    : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\n• Swap Size    : ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB`);

    } else if (func === "status") {
        var activity = params.slice(1).join(" ")
        if (!activity) {
            msg.channel.send("**Status reset**\nUse *?bot status <status>* to change the name.");
            bot.user.setActivity(activity);
        } else {
            bot.user.setActivity(activity);
            msg.channel.sendMessage(`Status set to: Playing *${activity}*`);
        }

//  } else if (func === "username") { 
//      var username = params.slice(1).join(" ")
//      bot.user.setUsername(`${username}`);
//      msg.channel.sendMessage(`Name set to: *${username}*`)

    } else if (func === "help") {
        msg.channel.sendEmbed({
            "color": 1752220,
            "title": "\:book: List Of Available Functions",
            "fields": [{
                "name": "avatar",
                "value": "?bot avatar <avatar URL>\nChanges the bot's avatar. Remember to use a link to an image!\nᴄᴀɴ ᴏɴʟʏ ʙᴇ ᴜsᴇᴅ ᴇᴠᴇʀʏ 5 ᴍɪɴᴜᴛᴇs!",
                },
                {
                "name": "info",
                "value": "?bot info\nProvides some information about this bot.",
              },
              {
                "name": "name",
                "value": "?bot name <name>\nChanges the bot's nickname.",
              },
              {
                "name": "stats",
                "value": "?bot stats\nProvides some statistics about this bot.",
              },
              {
                "name": "status",
                "value": "?bot status <status>\nSets the bot to be playing something.",
              },
            ],
            "footer": {
                "text": "TIP: Try @'ing me for some more fun"
              }
        });  

    } else {
        msg.channel.sendEmbed({
          "color": 10038562,
          "title": "\:no_entry_sign: Function not recognised",
          "description": "Try ?bot help"
          });
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
    name: "bot",
    description: "All purpose bot command. Change avatar, name & status and view stats & info.",
    usage: "bot [function] (input)",
    example: "bot name TestBot"
  };