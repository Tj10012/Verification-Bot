const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setrole",
  aliases: ["sr"],
  category: ":frame_photo: WELCOME",
  run: (client, message, args) => {

     if (!message.member.hasPermission("ADMINISTRATION")) {
      return message.channel.send("You do not enough permission to use this command.");
    }
    let vrole = message.mentions.roles.first();
    if(!vrole) {
      return message.channel.send(`Give me a role you want to give when they verified.`)
    }
    

   // This code is made by Supreme#2401
    db.set(`verole_${message.guild.id}`, vrole.id)
    
    
    message.channel.send(`Now I will give\`${vrole}\` as verification role`)
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
