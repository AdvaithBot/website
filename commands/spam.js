exports.name = "spam"
exports.level = 0; 


exports.command = function(client, message) {

  // advaithbot server only
  if(message.guild.id!=398998849026261003)
  return;
  message.channel.send(message.content.slice(1))
  message.channel.send(message.content.slice(1))
  message.channel.send(message.content.slice(1))
  message.channel.send(message.content.slice(1))
  message.channel.send(message.content.slice(1))
  message.delete();
  
}