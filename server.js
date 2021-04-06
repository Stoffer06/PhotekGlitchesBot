
const express = require("express");
const app = express();


app.use(express.static("public"));

app.get("/", (request, response) => {
  response.send("DISCORD YT NOTIFIER");
});



// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

const discord = require("discord.js")
const client = new discord.Client()
const YouTubeNotifier = require("youtube-notification")

const notifier = new YouTubeNotifier({
  hubCallback: 'https://example.com/youtube',
  port: 8080,
  secret: 'Something',
  path: '/youtube'
});
