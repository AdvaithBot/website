exports.name = "splash"
exports.level = 0; 


exports.command = function(client, message) {

    // Checks if running in DM
    if (message.channel.type==="dm") {
        message.channel.send({
            "embed": {
              "title": "Error",
              "description": "Did you really try to run splash in a DM? smh...",
              "color": 16711680,
              "footer": {
                "text": "Not in a DM? Please report this to the bot developer."
              }
            }
          })
    }

  // Bot Permission check
       if(!message.guild.members.get(client.user.id).hasPermission('EMBED_LINKS'))
         return message.channel.send('<:no:424361302069346304> I don\'t have the `Embed Links` permission! I need this to run the splash command.')
  
    // Sends the splash embed
  message.channel.send({
    "embed": {
      "title": message.guild.name+" Invite Splash Screen",
      "description": "Below you should see this server's invite splash screen.\nYou can set the splash screen in Discord Server Settings.\nInvite splash screens are only available for [Partnered](https://discordapp.com/partners) and [Verified](https://discordapp.com/partners) servers.",
      "image": {
        "url": `https://cdn.discordapp.com/splashes/${message.guild.id}/${message.guild.splash}.png?size=1024`
      }
    }
  })

  // Checks if there is no splash screen
  if (message.guild.splash==null) {
    message.channel.send({
        "embed": {
          "title": "Error",
          "description": "This server does not have an invite splash screen set.",
          "color": 16711680
        }
      })
}
  
}