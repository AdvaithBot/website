exports.name = "flip"
exports.aliases = ["flipcoin", "coinflip"]
exports.level = 0; 


exports.command = function(client, message) {

    var myArray = [
        "Heads",
        "Tails"
      ];
      
      var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

      message.channel.send({
        "embed": {
          "title": "Coin Flip",
          "description": `You got ${randomItem}.`,
          "color": 12632256
        }
      })
  
}