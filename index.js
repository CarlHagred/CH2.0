const Discord = require("discord.js");
const client = new Discord.Client();
client.login("");

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", gotMessage);

const replies = [
  "Du är king",
  "Va",
  "Jag vann",
  "Jo men det är ju för att luften i den har pyst ut och då blir den sådär wobblig",
  "Testa att lägga den utanför och se om det löser det",
  "jag har löst det",
  "jag tror att om du byter den där uppe mot en av de nyare så kommer den funka",
  "det är ju för att du satte den där istället för att ha den diräkt",
  "varför använder du den haha",
];

function gotMessage(msg) {
  console.log(msg.content);
  const index = Math.floor(Math.random() * replies.length);
  if (msg.content === "vet du Carl?") {
    msg.channel.send(replies[index]);
  } else if (msg.content === "Gamers assemble") {
  }
}
