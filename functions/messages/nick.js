exports.name = "nick"
exports.type = ["all"];
exports.function = function(client, message, command) {

  var newnick = message.content.split(' ').slice(1).join(' ')
  
  if(message.content.startsWith("/nick")){
      
    if(message.author.bot)
  return message.channel.send('Nice try, but bots can\'t use Clyde commands.')
    
    message.member.setNickname(newnick)
    .catch(error => message.channel.send({
        "embed": {
          "title": "Error",
          "description": `Error changing the user's nick: \`${error}\`\n\nIs the error \"Privilege is too low\"? If so, the problem is likely the bot doesn't have the Change Nicknames permission, or ${message.author} (${message.author.tag}) has a role higher than me.`,
          "color": 16711680,
          "footer": {
            "text": "Got a different error? Report it to the bot developer."
          }
        }
      }))
    message.delete().catch(O_o=>{})
  }
}