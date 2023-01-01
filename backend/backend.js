import express, { application } from "express";
import fetch from "node-fetch";
const app = express();
const port = 3500;

const client_id = "41d86423893746dcaf5c73b7085a6eb8";
const client_secret = "edc8a7ad5f294b608a651046224822e9";
const redirect_uri = "http://localhost:5173/";

app.get("/login", (req, res) => {
  res.redirect(
    "http://accounts.spotify.com/authorize?client_id=41d86423893746dcaf5c73b7085a6eb8&response_type=code&redirect_uri=http://localhost:5173/&show_dialog=true&scope=user-read-private%20user-library-read%20user-read-email%20playlist-read-private%20user-read-recently-played%20user-follow-read%20user-read-playback-state%20user-top-read"
  );
});

app.listen(port, (req, res) => {
  console.log("Servers started on port", port);
});

app.get("/test", (req, res) => {
  res.send(new Buffer(client_id + ":" + client_secret).toString("base64"));
});
