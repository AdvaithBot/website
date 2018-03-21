exports.name = "cmdlog"
exports.type = ["command"];
exports.function = function(client, message, command) {

  //client.channels.get('424392826122534923').send(`\`${message.content}\``)
  if(message.guild.id=='398998849026261003'){message.channel.send(':white_check_mark:')}
}