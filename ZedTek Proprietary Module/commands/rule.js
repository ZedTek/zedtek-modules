const Discord = require('discord.js')

const rule1 = new Discord.MessageEmbed()
  .setTitle('Rule 1')
  .addField('Be a decent human.', 'Treat everyone with respect. Absolutely no harassment, witch hunting, sexism, racism, homophobia, transphobia, or hate speech will be tolerated. This is not negotiable.')
const rule2 = new Discord.MessageEmbed()
  .setTitle('Rule 2')
  .addField('Keep it PG-13.', 'No NSFW or obscene content. This includes text, images, or links featuring nudity, sex, hard violence, or other graphically disturbing content. Exception: #memes and #nsfw-botspam, however this is subject to moderator discretion.')
const rule3 = new Discord.MessageEmbed()
  .setTitle('Rule 3')
  .addField('Keep this a safe environment.', 'If you see something against the rules or something that makes you feel unsafe, let staff know. We want this server to be a welcoming space! However, please don\'t mini-mod. Just kindly report behavior to the mods, and have them take care of it.')
const rule4 = new Discord.MessageEmbed()
  .setTitle('Rule 4')
  .addField('Keep things related to their channels.', 'Please keep the subjects of the channels on topic. Any off-topic conversation should be in #general and other channels should be used for their respective topics only. Thank you.')
const rule5 = new Discord.MessageEmbed()
  .setTitle('Rule 5')
  .addField('Please don\'t spam ping.', 'Pinging the CEO, Server Manager , or other Staff excessively and without reason may result in a mute or a ban. This includes methods such as bot commands.')
const rule6 = new Discord.MessageEmbed()
  .setTitle('Rule 6')
  .addField('Swearing is allowed, however, please keep it to a minimum.', 'Please make sure you are still complying with rule 1.')
const rule7 = new Discord.MessageEmbed()
  .setTitle('Rule 7')
  .addField('Copyright Infringement is not allowed under ANY circumstances.', 'Usage of any copyrighted content without the express permission of the copyright owner is prohibited. Any suspected infringement on copyright or other intellectual property will be investigated, and any proven infringement will result in a ban. No exceptions.')
const rulesNotice = new Discord.MessageEmbed()
  .setTitle('Notice:')
  .addField('All rules are subject to interpretation.', 'The CEO reserves all right to interpret these rules, and to change them at their own discretion.')
  
module.exports = {
  name: 'ruleslist',
  execute(message) {
    message.channel.send(rule1, rule2, rule3, rule4, rule5, rule6, rule7, rulesNotice)
  }
}
