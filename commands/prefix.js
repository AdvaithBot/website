exports.name = "prefix";
exports.level = 0;

exports.command = function(client, message) {
	
  if(!message.member.hasPermission('MANAGE_SERVER')&&message.member.id!=="190916650143318016") 
  return message.channel.send({
    "embed": {
      "title": "Error",
      "description": "You do not have the \"Manage Server\" permission",
      "//color": 16711680,
      "footer": {
      	"text": "Please contact a server admin."
      }
    }
  })
    
    var globalVars = require('../globalVars.js')
    let newPrefix = message.content.split(' ').slice(1).join(' ');
    var globalPrefOld = globalVars.globalPrefix
    client.customConfig.set(message.guild.id, {prefix: newPrefix})
    message.channel.send("Prefix changed to "+newPrefix)
    
  
}
