const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setverify",
  aliases: ["sv"],
  category: ":frame_photo: WELCOME",
  run: (client, message, args) => {

  
     if (!message.member.hasPermission("ADMINISTRATION")) {
      return message.channel.send("You do not enough permission to use this command.");
    }
    let channel = message.mentions.channels.first()
    
    if(!channel) {
      return message.channel.send("You have to specify the channel")
    }
   // This code is made by Supreme#2401
    db.set(`verify_${message.guild.id}`, channel.id)
    
    
    message.channel.send(`Verification channel updated as ${channel}`)
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
