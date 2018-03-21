exports.name = "test"
exports.level = 0; 

var name
var format

exports.command = async function(client, message) {
  
  let text = message.content.split(' ').slice(1).join(' ')
  
  if(!text || text == '\\' || text == '_')
    return console.log('!!test failed: No text')
  
  if(!message.member.nickname) {
   name = message.member.user.username
  } else {
   name = message.author.username }
  
    if(message.author.avatar.startsWith('a_')){
   format = 'gif'
    }  else {
   format = 'png' }
  
  let x = await message.channel.createWebhook(name, { avatar: message.author.displayAvatarURL({format: format, size: 1024}), reason: `${message.author.tag} used /me`})
  await x.send(`_${text}_`)
  await x.delete()
  
  message.delete()
  
}