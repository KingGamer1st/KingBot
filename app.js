const Discord = require("discord.js");
const bot = new Discord.Client({ fetchAllMembers: true });
const config = require("./config.json");
const fs = require("fs");
const moment = require("moment");

const log = (msg) => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${msg}`);
};

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
fs.readdir("./cmd/", (err, files) => {
  if (err) console.error(err);
  log(`Loading a total of ${files.length} commands.`);
  files.forEach(f => {
    let props = require(`./cmd/${f}`);
    log(`Loading Command: ${props.help.name}. :ok_hand:`);
    bot.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      bot.aliases.set(alias, props.help.name);
    });
  });
});

bot.on("message", msg => {
  if (!msg.content.startsWith(config.prefix)) return;
  let command = msg.content.split(" ")[0].slice(config.prefix.length).toLowerCase();
  let params = msg.content.split(" ").slice(1);
  let perms = bot.elevation(msg);
  let cmd;
  if (bot.commands.has(command)) {
    cmd = bot.commands.get(command);
  } else if (bot.aliases.has(command)) {
    cmd = bot.commands.get(bot.aliases.get(command));
  }
    else {                                                
      msg.channel.sendEmbed({
        "color": 10038562,
        "title": "\:no_entry_sign: Command not recognised",
        "description": "Try ?help"
        });
    }                                                    
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(bot, msg, params, perms);
  }
});

bot.on("ready", () => {
  log(`KingBot: Ready to serve ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} servers.`);
  //bot.user.setActivity('?help');
});

bot.on("error", console.error);
bot.on("warn", console.warn);                           //Turn off "deprecation warnings" here

bot.login(config.botToken);

bot.reload = function(command) {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./cmd/${command}`)];
      let cmd = require(`./cmd/${command}`);
      bot.commands.delete(command);
      bot.aliases.forEach((cmd, alias) => {
        if (cmd === command) bot.aliases.delete(alias);
      });

      bot.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        bot.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

bot.elevation = function(msg) {
  /* This function should resolve to an ELEVATION level which
     is then sent to the command handler for verification*/
  let permlvl = 0;
  let mod_role = msg.guild.roles.find("name", "Mods");
  if(mod_role && msg.member.roles.has(mod_role.id)) permlvl = 2;
  let admin_role = msg.guild.roles.find("name", "Devs");
  if(admin_role && msg.member.roles.has(admin_role.id)) permlvl = 3;
  if(msg.author.id === config.ownerid) permlvl = 4;
  return permlvl;
};


bot.on('message', msg=> {
  if (msg.isMentioned(bot.user)) {
      if (msg.content.includes("Hello")) {
          msg.reply("Hello! \:smiley:\:wave:");
      }
      else if (msg.content.includes("Goodbye")) {
          msg.reply("Goodbye \:cry:\:wave:");
      }
      else if (msg.content.includes("avatar")) {
        msg.reply(msg.author.avatarURL);
      }
      else if (msg.content.includes("kys")) {
        msg.reply("Fuck off virgin");
      }
      else if (msg.content.includes("fuck me")) {
        msg.reply("Did you seriously just ask a Discord bot to fuck you? Get a life loser");
      }
      else if (msg.content.includes("age")) {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;
        var yyyy = today.getFullYear();
        if(dd<10) {
          dd='0'+dd
          }
          if(mm<10) {
          mm='0'+mm
          }
        today = yyyy+'-'+mm+'-'+dd;

        var date1 = new Date("2018-05-26");
        var date2 = new Date(`${today}`);
        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
        msg.reply(`I am **${diffDays}** days old`);
      }
      else if (msg.content.includes("enlighten")) {
        var number = Math.floor(Math.random() * 6);
        switch (number) {
          case 0:
              msg.channel.send(`"Let those among you who are without sin be the first to throw the stone. The crowd looked at Jesus, believing he had a good point. Then Jesus picked up a stone."\n**Contradiction 12:17**`) 
              break;
          case 1:
              msg.channel.send(`"And Jesus said unto Paul, 'Come forth, and receive everlasting life.' But Paul came in fifth, and received a toaster."\n**Competition 7:13**`)
              break;
          case 2:
              msg.channel.send(`"And on the third day, God created the Remington bolt-action rifle, so that Man could fight the dinosaurs. And the homosexuals."\n**Genesis 1:9**`)
              break;
          case 3:
              msg.channel.send(`"Thou shalt have dominion over all the beasts. Except, of course, cats."\n**Felines 3:8**`)
              break;
          case 4:
              msg.channel.send(`"This Bible verse always keeps me going:"\n**Lunch 12:35**`)
              break;
          case 5:
              msg.channel.send(`"The angel appeared before Mary and said, 'Have you been mis-sold PPI? If yes, you could reclaim ₪₪₪s! Average claim ₪15,000!'\n**Luke 1:30**`)
              break;    
      }
      }
      else if (msg.content.includes("advice")) {
        var number = Math.floor(Math.random() * 7);
        switch (number) {
          case 0:
              msg.channel.send(`If she breathes, she a thot`) 
              break;
          case 1:
              msg.channel.send(`Much like how Vampires can we warded off with a clove of garlic, Gay men can be warded off with with a ham sandwich:`)
              msg.channel.sendEmbed({
                "image": {
                  "url": "https://i.imgur.com/5CwuSJn.jpg"
                }
              });
              break;
          case 2:
              msg.channel.send(`If your headphones get tangled, simply spray them with some 'Johnson's No More Tangles' like so:`)
              msg.channel.sendEmbed({
                "image": {
                  "url": "https://images-cdn.9gag.com/photo/a3qYA2m_700b.jpg"
                }
              });
              break;
          case 3:
              msg.channel.send(`Tired of ironing your shirts? Get fat and watch those creases vanish!`)
              break;
          case 4:
              msg.channel.send(`Bathroom Tip: Discreetly cover up your poop sounds by continually shrieking at the top of your lungs.`)
              break;
          case 5:
              msg.channel.send(`Avoid wasting time brushing your teeth by simply adding toothpaste to your food instead:`)
              msg.channel.sendEmbed({
                "image": {
                  "url": "https://s3.scoopwhoop.com/anj/nhn/64cfe985-7888-4a3d-99ab-000735199a35.jpg"
                }
              });
              break;
          case 6:
              msg.channel.send(`If you ever have suicidal thoughts, remember to call **1-900-490-FREAK**`)
              break;    
      }
      }
      else if (msg.content.includes("help")) {
          const embed = {
            "color": 1752220,
            "description": "• Say **Hello**\n• Say **Goodbye**\n• Tell you my **age**\n• Send you your **avatar**\n• Give **enlighten**ment\n• Give life **advice**",
            "footer": {
              "text": "TIP: These commands are case sensitive"
            }
          }
          msg.reply("Sure. Here's a list of things I can do when you ask me:", {embed});
      }
      else {
        msg.reply("Huh? Sorry, but I don't understand what you want me to do.\nMaybe try asking me for some *help* 😉");
      }
    }

  if (msg.content.includes("yass")) {
        msg.channel.sendEmbed({
          "image": {
            "url": "https://media.tenor.com/images/36a53f9e56e79f730f3e812982b53e5e/tenor.gif"
          }
      });
    }
    else if (msg.content.includes("gay")) {
      if (msg.member.roles.find("name", "Bots")) {
      } else {
        msg.channel.sendEmbed({
          "title": "LMAO DID SOMEBODY SAY GAY?!",
          "image": {
            "url": "https://img.memecdn.com/miss-me-with-that-gay-shit_o_7070269.jpg"
          }
        });
      }
    }
});

