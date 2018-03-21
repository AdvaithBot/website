var failed //declare failed var

exports.name = "role"
exports.level = 0; 

exports.command = async function(client, message) {
  
  // Permission check
       if(!message.guild.members.get(client.user.id).hasPermission('EMBED_LINKS')){
          message.channel.send(':warning: I don\'t have the `Embed Links` permission! I need this to run the ban command properly.')
 }
  
  // Beta user check
  if(message.member.id!=="190916650143318016"&&message.member.id!=="339177677326123018"&&message.member.id!=="277530929029840897"&&message.member.id!=="269247101697916939"&&message.member.id!=="266277541646434305"&&message.member.id!=="318882324597047308"&&message.member.id!=="105186885768364032"&&message.member.id!=="217735332236492800"&&message.member.id!=="236551397821251585"&&message.member.id!=="268071134057070592")
  return message.channel.send({
    "embed": {
      "title": "Error",
      "description": "You do not have access to this beta command. Get access by asking in the [AdvaithBot server](https://discord.gg/WxPH3Fc)!",
      "color": 16711680,
      "footer": {
        "text": "The role command is new, and still in open beta. Anyone can join the beta at the AdvaithBot server."
      }
    }
  })
  
  // check for manage roles perm
  if(!message.member.hasPermission('MANAGE_ROLES')&&message.member.id!=="190916650143318016")
  return message.channel.send({
    "embed": {
      "title": "Error",
      "description": "You do not have the \"Manage Roles\" permission.",
      "color": 16711680,
      "footer": {
        "text": "Please contact a server admin."
      }
    }
  })

 failed = false
 const args = message.content.slice(2).trim().split(/ +/g);
 const command = args.shift().toLowerCase();
  
  // Makes sure first argument is correct: either add or remove
  if(args[0]!=='add' && args[0]!=='remove')
  return message.channel.send({
        "embed": {
          "title": "Error",
          "description": "Invalid option",
          "color": 16711680,
          "footer": {
            "text": "!!role <add|remove> <@user> <rolename>"
          }
        }
      }) 
  
  // Gets user to modify
  let member = message.mentions.members.first();
    if(!member)
    return message.channel.send({
        "embed": {
          "title": "Error",
          "description": "Invalid member",
          "color": 16711680,
          "footer": {
            "text": "Please mention a user in the server."
          }
        }
      })
  
  if(args[2]==null)
    return message.channel.send({
        "embed": {
          "title": "Error",
          "description": "Invalid role name",
          "color": 16711680,
          "footer": {
            "text": "!!role <add|remove> <@user> <rolename>"
          }
        }
      }) 
  
  let role = message.guild.roles.find('name', args[2])
  
  //Add role
  if(args[0]=='add'){
  await member.roles.add(role, `Role added by ${message.author.tag}`)
  .catch(error => { message.channel.send({
        "embed": {
          "title": "Error",
          "description": `Error changing the user's roles: \`${error}\``,
          "color": 16711680,
          "footer": {
            "text": "Need help? Join the AdvaithBot server."
          }
        }
      })
      failed = true})
  
  if(failed==false){
    message.channel.send({
        "embed": {
          "title": "Success",
          "description": `I have added the role ${args[2]} to ${member}.`,
          "color": 589568
        }
      }) }
  }
  //Remove role
  else if(args[0]=='remove'){
  await member.roles.remove(role, `Role removed by ${message.author.tag}`)
  .catch(error => { message.channel.send({
        "embed": {
          "title": "Error",
          "description": `Error changing the user's roles: \`${error}\``,
          "color": 16711680,
          "footer": {
            "text": "Need help? Join the AdvaithBot server."
          }
        }
      })
      failed = true})
  
  if(failed==false){
  message.channel.send({
        "embed": {
          "title": "Success",
          "description": `I have removed the role ${args[2]} from ${member}.`,
          "color": 589568
        }
      }) }
  }
    
}