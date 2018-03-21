exports.name = "ban"
exports.level = 0;
exports.aliases = ["b", "banne", "bean", "banhammer"]

exports.command = function(client, message) {
  
  // Embed Permission check
       if(!message.guild.members.get(client.user.id).hasPermission('EMBED_LINKS')){
          message.channel.send(':warning: I don\'t have the `Embed Links` permission! I need this to run the ban command properly.')
 }
  
  // external emoji perm check
       if(!message.guild.members.get(client.user.id).hasPermission('USE_EXTERNAL_EMOJIS')){
          message.channel.send({
            "embed": {
              "title": ":warning: Warning",
              "description": "I don't have the `Use External Emojis` permission.",
              "color": 16763981,
              "footer": {
                "text": "Give me this permission to let the ban command work fully."
              }
            }
          })
 }
  
  if(!message.member.hasPermission('BAN_MEMBERS')&&message.member.id!=="190916650143318016")
  return message.channel.send({
    "embed": {
      "title": "Error",
      "description": "You do not have the \"Ban Members\" permission.",
      "color": 16711680,
      "footer": {
        "text": "Please contact a server admin."
      }
    }
  })
  
  if(message.author.bot)
  return message.channel.send('Nice try, but bots can\'t use mod commands.')

    let member = message.mentions.members.first();
    if(!member)
    return message.channel.send({
        "embed": {
          "title": "Error",
          "description": "Invalid member",
          "color": 16711680,
          "footer": {
            "text": "Please mention a user in the server."
          }
        }
      })
    if(!member.bannable) 
      return message.channel.send({
        "embed": {
          "title": "Error",
          "description": "I cannot ban this user",
          "color": 16711680,
          "footer": {
            "text": "Make sure I have ban permissions, and I have a role above the user you want me to ban. Support: https://discord.gg/WxPH3Fc"
          }
        }
      })
    
    var reason = message.content.split(' ').slice(2).join(' ')

    if(!reason){
      var reason = "No reason provided!"}

    member.ban({ reason: reason+" | Banned by: "+message.author.tag })
    
    message.channel.send({
        "embed": {
          "title": "<:banhammer:401563204586700800> User Banned",
          "description": `${member} \(\`${member.user.tag}\`\) has been banned by ${message.author} \(\`${message.author.tag}\`\) for: ${reason}`,
          "color": 16721960,
          "footer": {
            "text": `ID: ${member.user.id}`
          }
        }
      })

}
