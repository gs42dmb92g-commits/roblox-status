import express from "express";

const app = express();

app.get("/", async (req, res) => {
  const r = await fetch("https://games.roblox.com/v1/games?universeIds=9497396029");
  const data = await r.json();

  const playing = data.data[0].playing;

  res.send(String(playing));
});

app.listen(3000);