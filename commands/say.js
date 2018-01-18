exports.name = "say"
exports.level = 0; 


exports.command = function(client, message) {

  message.channel.send(message.content.split(' ').slice(1).join(' '))
  message.delete().catch(O_o=>{});
  
}