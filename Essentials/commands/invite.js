const Discord = require('discord.js');
module.exports = {
    name: 'invite',
    description: 'invitacion',
    execute(message) {
        const embed = new Discord.RichEmbed();
        embed.setThumbnail("https://cdn.discordapp.com/attachments/474331584447643658/647640189379936276/Sin_titulo.png");
        embed.setColor("#74FF00");
        embed.setTitle("Invite me to your server!");
        embed.addField("Pipa invite:", "https://discordapp.com/api/oauth2/authorize?client_id=646202049926791180&permissions=8&scope=bot");
      embed.addField("Pipa Spanish invite:", "https://discordapp.com/api/oauth2/authorize?client_id=662916457981804584&permissions=8&scope=bot");
        message.channel.send(embed);
    },
};