exports.name = "me"
exports.type = ["all"];

var name
var format

exports.function = async function(client, message, command) {

  
  if(message.content.startsWith("/me ")){
      
  let text = message.content.split(' ').slice(1).join(' ')
  
  if(!text || text == '\\' || text == '_')
    return console.log('/me failed: No text')
  
  if(!!message.member.nickname) {
   name = message.member.nickname
  } else {
   name = message.author.username }
  
    if(message.author.avatar.startsWith('a_')){
   format = 'gif'
    }  else {
   format = 'png' }
    
  let x = await message.channel.createWebhook(name, { avatar: message.author.displayAvatarURL({format: format, size: 1024}), reason: `${message.author.tag} used /me on Android`})
  .catch(error => message.channel.send({
        "embed": {
          "title": "Error",
          "description": `Error creating the webhook to use /me: \`${error}\`\n\nIs the error \"Missing Permissions\"? If so, the problem is likely that I don't have the \`Manage Webhooks\` permission.`,
          "color": 16711680,
          "footer": {
            "text": "Got a different error? Report it to the bot developer at https://discord.gg/WxPH3Fc."
          }
        }
      }))
  await x.send(`_${text}_`)
  await x.delete()
  
    message.channel.send('(For Debugging) Format: '+format)
    
  message.delete();
  }
}