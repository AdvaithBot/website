exports.name = "flip"
exports.aliases = ["flipcoin", "coinflip"]
exports.level = 0; 


exports.command = function(client, message) {

    var myArray = [
        "Heads",
        "Tails"
      ];
      
      var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

  // Bot Permission check
       if(!message.guild.members.get(client.user.id).hasPermission('EMBED_LINKS'))
         return message.channel.send(`:information_source: I don\'t have the \`Embed Links\` permission! Give me this permission for a better looking flip command.\n\nCoin Flip\nYou got ${randomItem}`)
  
      message.channel.send({
        "embed": {
          "title": "Coin Flip",
          "description": `You got ${randomItem}.`,
          "color": 12632256
        }
      })
  
}