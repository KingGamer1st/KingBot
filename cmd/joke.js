exports.run = (bot, msg, params = []) => {
    var number = Math.floor(Math.random() * 30);
    switch (number) {
        case 0:
            msg.channel.sendEmbed({
                "color": 15105570,
                "title": "Why couldn't the bicycle stand up by itself?",
                "description": "It was two tired."
            });  
          break;
        case 1:
            msg.channel.sendEmbed({
                "color": 15105570,
                "title": "Did you hear about the restaurant on the moon?",
                "description": "Great food, no atmosphere."
            });  
          break;
        case 2:
            msg.channel.sendEmbed({
                "color": 15105570,
                "title": "Why did the coffee file a police report?",
                "description": "It got mugged."
            });  
          break;
        case 3:
            msg.channel.sendEmbed({
                "color": 15105570,
                "title": "People don’t like having to bend over to get their drinks.",
                "description": "We really need to raise the bar."
            });  
          break;
        case 4:
            msg.channel.sendEmbed({
                "color": 15105570,
                "title": "I used to work in a shoe recycling shop.",
                "description": "It was sole destroying."
            });  
          break;
        case 5:
            msg.channel.sendEmbed({
                "color": 15105570,
                "title": "Did you hear about the kidnapping at school?",
                "description": "It's fine, he woke up."
            });  
          break;
		case 6:
            msg.channel.sendEmbed({
                "color": 15105570,
                "title": "I’ve never gone to a gun range before.",
                "description": "I decided to give it a shot!"
            });  
          break;
		case 7:
            msg.channel.sendEmbed({
                "color": 15105570,
                "title": "What do you call a sketchy Italian neighbourhood?",
                "description": "The Spaghetto"
            });  
          break;
		case 8:
            msg.channel.sendEmbed({
                "color": 15105570,
                "title": "Want to hear a joke about construction?",
                "description": "I'm still working on it."
            });  
          break;
		case 9:
            msg.channel.sendEmbed({
                "color": 15105570,
                "title": "What do you call an elephant that doesn't matter?",
                "description": "An irrelephant"
            });  
          break;
		case 10:
            msg.channel.sendEmbed({
                "color": 15105570,
                "title": "What do you call cheese that isn't yours?",
                "description": "Nacho Cheese."
            });  
          break;
		case 11:
            msg.channel.sendEmbed({
                "color": 15105570,
                "title": "Our wedding was beautiful,",
                "description": "Even the cake was in tiers"
            });  
          break;
		case 12:
            msg.channel.sendEmbed({
                "color": 15105570,
                "title": "What did the grape do when he got stepped on?",
                "description": "He let out a little wine."
            });  
          break;
		case 13:
            msg.channel.sendEmbed({
                "color": 15105570,
                "title": "I wouldn't buy anything with velcro.",
                "description": "It's a total rip-off."
            });  
          break;
		case 14:
            msg.channel.sendEmbed({
                "color": 15105570,
                "title": "The shovel was a ground-breaking invention."
            });  
          break;
		case 15:
            msg.channel.sendEmbed({
                "color": 15105570,
                "title": "Two goldfish are in a tank.",
                "description": 'One says to the other, "do you know how to drive this thing?"'
            });  
          break;
		case 16:
            msg.channel.sendEmbed({
                "color": 15105570,
                "title": "What do you call a fat psychic?",
                "description": "A four-chin teller."
            });  
          break;
		case 17:
            msg.channel.sendEmbed({
                "color": 15105570,
                "title": "The rotation of earth really makes my day."
            });  
          break;
		case 18:
            msg.channel.sendEmbed({
                "color": 15105570,
                "title": "I thought about going on an all-almond diet.",
                "description": "But that's just nuts."
            });  
          break;
		case 19:
            msg.channel.sendEmbed({
                "color": 15105570,
                "title": "Why did the scarecrow win an award?",
                "description": "Because he was outstanding in his field."
            });  
          break;
		case 20:
            msg.channel.sendEmbed({
                "color": 15105570,
                "title": "I just watched a program about beavers.",
                "description": "It was the best dam program I've ever seen."
            });  
          break;
		case 21:
            msg.channel.sendEmbed({
                "color": 15105570,
                "title": "Want to hear a joke about paper?",
                "description": "Nevermind it's tearable."
            });  
          break;
		case 22:
            msg.channel.sendEmbed({
                "color": 15105570,
                "title": "How many apples grow on a tree?",
                "description": "All of them."
            });  
          break;
		case 23:
            msg.channel.sendEmbed({
                "color": 15105570,
                "title": "What do you call a fake noodle?",
                "description": "An Impasta."
            });  
          break;
		case 24:
            msg.channel.sendEmbed({
                "color": 15105570,
                "title": "Why cant't you hear a pterodactyl go to the bathroom?",
                "description": "Because the pee is silent"
            });  
          break;
		case 25:
            msg.channel.sendEmbed({
                "color": 15105570,
                "title": "Have you heard of the band 1023MB?",
                "description": "They haven't got a gig yet"
            });  
          break;
		case 26:
            msg.channel.sendEmbed({
                "color": 15105570,
                "title": "I hate jokes about german sausages.",
                "description": "They're the wurst"
            });  
          break;
		case 27:
            msg.channel.sendEmbed({
                "color": 15105570,
                "title": "Last night I dreamt I was a muffler.",
                "description": "I woke up exhausted."
            });  
          break;
		case 28:
            msg.channel.sendEmbed({
                "color": 15105570,
                "title": "Don't trust atoms.",
                "description": "They make up everything"
            });  
          break;
		case 29:
            msg.channel.sendEmbed({
                "color": 15105570,
                "title": "I've just been diagnosed as Colourblind.",
                "description": "I know, it certainly has come out of the purple."
            });  
          break;
  }
  };
  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
exports.help = {
    name: "joke",
    description: "Tells a very funny joke.",
    usage: "joke",
    example: "joke"
  };
  