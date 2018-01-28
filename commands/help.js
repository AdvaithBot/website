exports.name = "help"
exports.level = 0; 


exports.command = function(client, message) {

  message.channel.send({
  "embed": {
    "title": `**__${client.user.username} Help__**`,
    "description": "For more information on the commands, click [here](https://advaithbot.com#commands).",
    "fields": [
      {
        "name": "Advaith's Commands",
        "value": "- \`reload\`: reloads stuff\n- \`die\`: kills the bot\n- \`eval\`: evals stuff"
      },
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
        "value": "- \`/nick\`: Changes your nickname"
      }
    ]
  }
})
  
}