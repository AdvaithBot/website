  const DBL = require("dblapi.js");
  const dbl = new DBL(process.env.DBL_TOKEN);
// initialize DBL API

exports.name = "voterole"
exports.type = ["all"];
exports.function = function(client, message, command) {


  if(message.author.bot)
  return
 
  if(message.guild.id==='398998849026261003'){
      var promise1 = Promise.resolve((dbl.hasVoted(message.author.id)))
      if(!message.member.roles.has('405604859920777218')) {
   promise1.then(function(value) {
      if(value==true){
       message.member.roles.add('405604859920777218', 'Automatically Added DBL Upvote Role')
       console.log('Added Upvoter role to '+message.author.tag) 
   }
   })
    }
   }
}