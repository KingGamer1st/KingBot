exports.run = (bot, msg, params) => {
    if (!params[0]) {
        msg.channel.sendCode("asciidoc", `Correct Usage: ?info [name]`);
    } else {
      let name = params[0].toLowerCase();

      if(name === "alex") {
        msg.channel.sendEmbed({
          "color": 15105570,
          "title": "Alex",
          "description": "Is the bitch of the group. Will probably die before 50. Being gay isn’t special if you’re a fucking permavirgin.",
          "thumbnail": {
            "url": "https://i.pinimg.com/originals/ca/55/e7/ca55e79fa339418a304d74974d327eb2.jpg"
          }});

    } else if (name === "andrew") {
        msg.channel.sendEmbed({
          "color": 15105570,
          "title": "Andrew",
          "description": "Fat cunt. Ironically bisexual. Listens to death metal because his parents don’t understand him.",
          "thumbnail": {
            "url": "https://i.ytimg.com/vi/-fwUlnxnjtA/maxresdefault.jpg"
          }});

    } else if (name === "bena") {
        msg.channel.sendEmbed({
          "color": 15105570,
          "title": "Ben A",
          "description": "Lowkey aspie faking it ‘til he makes it. Despite this he’s easily the most charismatic in the group.",
          "thumbnail": {
            "url": "http://1.bp.blogspot.com/_kIE0_A2v1-Y/TKOjtcH--dI/AAAAAAAAAUo/TRYdg42KPDY/s1600/diary+of+a+mad+sonic+fanboy.JPG"
          }});

    } else if (name === "benc") {
      msg.channel.sendEmbed({
        "color": 15105570,
        "title": "Ben C",
        "description": "Awkward goblin child. High-key bullying material. Possibly gay",
        "thumbnail": {
          "url": "https://vignette.wikia.nocookie.net/lotr/images/e/e1/Gollum_Render.png/revision/latest?cb=20141218075509"
        }});

    } else if (name === "duncan") {
      msg.channel.sendEmbed({
        "color": 15105570,
        "title": "Duncan",
        "description": "Is all together too good for this server, and is only here to see if anyone does something stupid. Occupies his time with more important things.",
        "thumbnail": {
          "url": "http://assets1.bigthink.com/system/idea_thumbnails/61210/size_1024/a-loving-god.jpg?1467485710"
        }});

    } else if (name === "dylan") {
      msg.channel.sendEmbed({
        "color": 15105570,
        "title": "Dylan",
        "description": "Idiot-savant and general nuisance. Could probably do something worthwhile in his life if his days weren't occupied with Fortnite and CS:GO. Most of his personal successes are undercut by Thomas, a generally superior specimen. Do not interact unless absolutely necessary.",
        "thumbnail": {
          "url": "https://i.ytimg.com/vi/gCXXLjSbHEw/maxresdefault.jpg"
        }});

    } else if (name === "emma") {
      msg.channel.sendEmbed({
        "color": 15105570,
        "title": "Emma",
        "description": "Friend of a friend’s girlfriend. General detractor and wannabe shitposter. Also sassy as hell",
        "thumbnail": {
          "url": "http://static.tvtropes.org/pmwiki/pub/images/black-woman-attitude_4523.jpg"
        }});

    } else if (name === "finn") {
      msg.channel.sendEmbed({
        "color": 15105570,
        "title": "Finn",
        "description": "Josh’s daddy and duck buddy supreme. Used to have funny hair but it’s fine now.\n\n*Yo ho ho and a bottle of rum,\nThe women weep and the children cry,\nHe taketh games from scalper scum,\nSee how all the developers die.*",
        "thumbnail": {
          "url": "https://ih1.redbubble.net/image.420383748.1178/raf,360x360,075,t,fafafa:ca443f4786.jpg"
        }});
  
    } else if (name === "james") {
      msg.channel.sendEmbed({
        "color": 15105570,
        "title": "James",
        "description": "The Warburtons white loaf of the group. The plain boiled rice perhaps. The Ambrosia rice pudding if you will. Listen, what I'm trying to say is that he's bland.",
        "thumbnail": {
          "url": "https://www.abelandcole.co.uk/media/756_4460_z.jpg"
        }});
  
    } else if (name === "kieran") {
      msg.channel.sendEmbed({
        "color": 15105570,
        "title": "Keiran",
        "description": "Concussed and stressed 24/7. Too busy for this bullshit. Needs a hug.",
        "thumbnail": {
          "url": "http://i0.kym-cdn.com/photos/images/masonry/001/126/626/e91.jpg"
        }});     

    } else if (name === "kyle") {
      msg.channel.sendEmbed({
        "color": 15105570,
        "title": "Kyle",
        "description": "Waste of perfectly good air. Contributes nothing and barely has a presence.",
        "thumbnail": {
          "url": "http://cdn.shopify.com/s/files/1/1061/1924/products/Nerd_with_Glasses_Emoji_2a8485bc-f136-4156-9af6-297d8522d8d1_grande.png?v=1483276509"
        }});
  
    } else if (name === "thomas") {
      msg.channel.sendEmbed({
        "color": 15105570,
        "title": "Thomas",
        "description": "Boring. Used to troll on Minecraft. Unironically enjoys Caramelldansen",
        "thumbnail": {
          "url": "http://i0.kym-cdn.com/entries/icons/original/000/023/419/nerd_smoking.JPG"
        }});   
        
    } else if (name === "list") {
      msg.channel.sendEmbed({
        "color": 1752220,
        "title": "\:book: List Of Available Users",
        "description": "Alex, Andrew, BenA, BenC, Duncan, Dylan, Emma, Finn, James, Kieran, Kyle, Thomas",
      });          

    } else {
        msg.channel.sendEmbed({
          "color": 10038562,
          "title": "\:no_entry_sign: User not recognised",
          "description": "Try ?info list"
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
    name: "info",
    description: "Provides information on someone in the group.",
    usage: "info [name]",
    example: "info Thomas"
  };