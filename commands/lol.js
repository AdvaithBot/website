exports.name = "lol"
exports.level = 0; 


exports.command = function(client, message) {

  const args = message.content.slice(2).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  var emoji;
  var role;
  
  emoji = message.guild.emojis.find("name", args[0]).id
  role = message.guild.roles.find("name", message.content.split(' ').slice(2).join(' ')).id
  
  message.channel.send(`r.add ${emoji} ${role}`)
} //wtf is this lol :thinking: