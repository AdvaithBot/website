exports.name = "embed"
exports.aliases = ["simpleembed"]
exports.level = 0; // level determines who can use this command (0 = server member, 10 = the creator, you can remap this making a message function called "permissioncheck")


exports.command = function(client, message) {

  message.channel.send({
  "embed": {
    "description": message.content.split(' ').slice(1).join(' ')
    }
  })
  message.delete().catch(O_o=>{});
  
}