exports.name = "kick"
exports.level = 0;
exports.aliases = ["k"]

exports.command = function(client, message) {

  if(!message.member.hasPermission('KICK_MEMBERS')&&message.member.id!=="190916650143318016")
  return message.channel.send({
    "embed": {
      "title": "Error",
      "description": "You do not have the \"Kick Members\" permission.",
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
    if(!member.kickable) 
      return message.channel.send({
        "embed": {
          "title": "Error",
          "description": "I cannot kick this user",
          "color": 16711680,
          "footer": {
            "text": "Make sure I have kick permissions, and I have a role above the user you want me to kick."
          }
        }
      })
    
    var reason = message.content.split(' ').slice(2).join(' ')

    if(!reason){
      var reason = "No reason provided!"}

    member.kick(reason+" | Kicked by: "+message.author.tag)
    
    message.channel.send({
        "embed": {
          "title": "User Kicked",
          "description": `${member} \(\`${member.user.tag}\`\) has been kicked by ${message.author} \(\`${message.author.tag}\`\) for: ${reason}`,
          "color": 16721960,
          "footer": {
            "text": `ID: ${member.user.id}`
          }
        }
      })

}
