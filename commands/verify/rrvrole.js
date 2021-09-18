const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "rrvrole",
  aliases: ["rrvr"],

  run: (client, message, args) => {
   if (!message.member.hasPermission("ADMINISTRATION")) {
      return message.channel.send("You do not enough permission to use this command.");
    }
 
  db.delete(`srrole_${message.guild.id}`);
  
  

// This code is made by Supreme#2401
    
    message.channel.send(`Removed role that is verification role`)
  }
}
/**
 * @INFO
 * Bot Coded by Mr_Deadpool#7518 | https://discord.com/invite/fQeuQ64cSF
 * @INFO
 * Infinity | Develop & Gaming | https://discord.com/invite/fQeuQ64cSF
 * @INFO
 * Please mention Him / Infinity | Develop & Gaming, when using this Code!
 * @INFO
 */
