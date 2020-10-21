const discord = require("discord.js")
client.on('message', msg => {
  if (msg.channel.type == "dm") {
    msg.author.send("Hi there \nSomething went wrong :( \nJoin our server https://discord.gg/vWYQQsk to get help \nAM 24/7HR ONLINE, INVITE ME https://cbotdis.glitch.me/ ");
    return;
  }
});