exports.name = "help"
exports.level = 0; 


exports.command = function(client, message) {

  // Bot Permission check
       if(!message.guild.members.get(client.user.id).hasPermission('EMBED_LINKS'))
         return message.channel.send('<:no:424361302069346304> I don\'t have the `Embed Links` permission! I need this to run most commands, including help. Online command list: <https://advaithbot.com/#commands>')
  
  message.channel.send({
  "embed": {
    "title": `**__${client.user.username} Help__**`,
    "color": '45013',
    "description": "For more information on the commands, click [here](https://advaithbot.com#commands). For support, join [our server](https://discord.gg/WxPH3Fc).",
    "fields": [
      {
        "name": "Moderator Commands",
        "value": "- \`kick\`: Kicks a user\n- \`ban\`: Swings the almighty ban hammer on a user :hammer:\n- \`purge\`: Deletes a specified amount of chat messages."
      },
      {
        "name": "Normal Commands",
        "value": "- \`help\`: this\n- \`say\`: Says what you want to say\n- \`ping\`: :ping_pong: Checks how fast the bot is responding\n- \`embed\`: Says what you want in an embed!\n- \`8ball\`: Ask the 8ball a question!\n- \`flip\`: Flips a coin.\n- \`serverinfo\`: Shows some info about the server.\n- \`splash\`: Shows the server's invite splash screen."
      },
      {
        "name": "Clyde Android Commands",
        "value": "- \`/nick\`: Changes your nickname\n- \`/me\`: Sends your text as italicized\n- \`/shrug\`: Appends ¯\\\_(ツ)_/¯ to your message\n- \`/tableflip\`: Appends (╯°□°）╯︵ ┻━┻ to your message\n- \`/unflip\`: Appends ┬─┬ ノ( ゜-゜ノ) to your message"
      },
      {
        "name": "Beta Commands",
        "value": "- \`role\`: Adds or remove a role to/from a user"
      },
      {
        "name": "Upvote AdvaithBot",
        "value": "Like AdvaithBot? Upvote it [here](https://discordbots.org/bot/398690824721924107/vote)! You'll also get a cool role in the official server!"
      }
    ]
  }
})
  
}