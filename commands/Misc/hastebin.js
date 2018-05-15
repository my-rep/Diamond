const hastebin = require('hastebin-gen');
const Discord = require('discord.js');
const { RichEmbed } = require("discord.js");

class Hastebin extends Command {
  constructor(client) {
    super(client {
      name: "hastebin",
      description: "Make a file in Hastebin.",
      usage: "hastebin [code]",
      catagory: "Misc",
      extended: "Make an easy to use hastebin file.",
      aliases: ["hbin", "haste", "bin"],
    });
  }
  
  run(message, args) {
    hastebin(args.join(' '), "js").then(r => {
      var hastLink = r
      const hastEmb = new Discord.RichEmbed()
      .setURL(hastLink)
      .addField(`Link:`, `${hastLink})
      message.channel.send({embed: hastEmb})
  }).catch(console.error);
}

module.exports = Hastebin;
