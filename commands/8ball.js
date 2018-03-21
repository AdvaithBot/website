exports.name = "8ball"
exports.aliases = ["eightball"]
exports.level = 0; 

var emoji

exports.command = function(client, message) {

    var myArray = [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes, definitely",
        "You may rely on it",
        "As I see it, yes",
        "Most likely",
        "Outlook good",
        "Yes",
        "Signs point to yes",
        "Reply hazy try again",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don't count on it",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful"
      ];
      
      var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
  
    emoji = '<:blob_8ball:349679658033348618>'
  
    // external emoji perm check
       if(!message.guild.members.get(client.user.id).hasPermission('USE_EXTERNAL_EMOJIS')){
         emoji = ':8ball:'
          message.channel.send({
            "embed": {
              "title": ":information_source: Info",
              "description": "I don't have the `Use External Emojis` permission.",
              "color": 16763981,
              "footer": {
                "text": "I need this to run the 8ball command best."
              }
            }
          })
 }
  
  // Bot Permission check
       if(!message.guild.members.get(client.user.id).hasPermission('EMBED_LINKS'))
         return message.channel.send(`:information_source: I don\'t have the \`Embed Links\` permission! I need this to run the 8ball command best.\n\n${emoji} 8Ball\nQ: ${message.content.split(' ').slice(1).join(' ')}\nA: ${randomItem}`)

      message.channel.send({
        "embed": {
          "title": emoji+" 8Ball",
          "description": `Q: ${message.content.split(' ').slice(1).join(' ')}\nA: ${randomItem}`,
          "color": 2829099
        }
      })
  
}