exports.name = "voterole"
exports.type = ["all"];
exports.function = function(client, message, command) {

  const DBL = require("dblapi.js");
  const dbl = new DBL(process.env.DBL_TOKEN);

  if(message.guild.id==='398998849026261003'){
      var promise1 = Promise.resolve((dbl.hasVoted(message.author.id)))
   promise1.then(function(value) {
      if(value==true){
     if(!message.member.roles.has('405604859920777218')) {
       message.member.roles.add('405604859920777218', 'Automatically Added DBL Upvote Role')
       console.log('Added Upvoter role to '+message.author.tag) 
     }
   }
   })
   }
}