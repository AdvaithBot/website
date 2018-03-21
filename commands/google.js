exports.name = "google"
exports.aliases = ["g"]
exports.level = 0; 
let advaith = require('./../useFul.js');
const cheerio = require('cheerio'),
      snekfetch = require('snekfetch'),
      querystring = require('querystring');

exports.command = async function(client, message) {
function sendMessage(data) {
  advaith.sendMMessage(message.channel, data)
}
      // external emoji perm check
       if(!message.guild.members.get(client.user.id).hasPermission('USE_EXTERNAL_EMOJIS')){
          message.channel.send({
            "embed": {
              "title": ":warning: Warning",
              "description": "I don't have the `Use External Emojis` permission.",
              "color": 16763981,
              "footer": {
                "text": "I need this to run the Google command properly.."
              }
            }
          })
 }
  
    // Embed Permission check
       if(!message.guild.members.get(client.user.id).hasPermission('EMBED_LINKS')){
          message.channel.send(':warning: I don\'t have the `Embed Links` permission! I need this to run the google command properly.')
 }
  
  // Check for search query
  if(!message.content.split(' ').slice(1).join(' '))
    return message.channel.send({
        "embed": {
          "title": "Error",
          "description": "Invalid search",
          "color": 16711680,
          "footer": {
            "text": "You must provide something to search!"
          }
        }
        })
  
  // check for @everyone
  if(message.content.includes('@everyone'))
    return message.channel.send('no u')
  
  // Check for explicit content filter
 /* if(message.guild.explicitContentFilter!==2)
    return message.channel.send({
        "embed": {
          "title": "Error",
          "description": "This server does not filter explicit content",
          "color": 16711680,
          "footer": {
            "text": "You must provide something to search!"
          }
        }
        }) */
  
  let searchMessage = await message.channel.send('<a:loading:419021662525063169> <:google:425102122330357771> Searching Google...');
   let searchUrl = `https://www.google.com/search?q=${encodeURIComponent(message.content.split(' ').slice(1).join(' '))}&safe=active`;
  
  return snekfetch.get(searchUrl).then((result) => {
    let $ = cheerio.load(result.text);
    let bannedWords = ['porn', 'pussy', 'tits', 'clit', 'hentai', 'dick', 'lesbian', 'gay', 'adult', 'boobs', 'penis']; //enter a list of banned words, make them LOWERCASE
    let googleData = $('.r').first().find('a').first().attr('href');
    for (let i in bannedWords) {
     if(googleData.search(bannedWords[i]) != -1) 
       return searchMessage.edit('<:no:424361302069346304> This link is explicit for the current guild settings.');
    }
     googleData = querystring.parse(googleData.replace('/url?', ''));
    searchMessage.edit(`<:google:425102122330357771> Google Search Result for \`${message.content.split(' ').slice(1).join(' ')}\`:\n${googleData.q}\n\nMore Results: ${searchUrl}`);
    }).catch((err) => {
     searchMessage.edit({
        "embed": {
          "title": "<:no:424361302069346304> Error",
          "description": `<:google:425102122330357771> I was not able to get results for \`${message.content.split(' ').slice(1).join(' ')}\`.\n:information_source: Likely either no results were found, or a special element such as the dictionary or calculator was displayed.\n:link: Try going to ${searchUrl}.\n\n:page_with_curl: Error details: \`\`\`js\n${err}\`\`\``,
          "color": 16711680
        }
        });
  });
    
  
}