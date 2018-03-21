exports.name = "shrug"
exports.level = 0; 

var name

exports.command = async function(client, message) {
  
  if(!!message.member.nickname) {
   name = message.member.nickname
  } else {
   name = message.author.username }
  
  let x = await message.channel.createWebhook(name, { avatar: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=1024`, reason: `${message.author.tag} used /shrug`})
  await x.send(`${message.content.split(' ').slice(1).join(' ')} ¯\\\_(ツ)\_/¯`)
  await x.delete()
  
  
}