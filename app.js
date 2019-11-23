// reads in our .env file and makes those values available as environment variables
require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const passport = require("passport");

// ===== For headless Phaser =====
// const path = require("path");
// const jsdom = require("jsdom");

const routes = require("./routes/main");
const secureRoutes = require("./routes/secure");
const passwordRoutes = require("./routes/password");
const asyncMiddleware = require("./middleware/asyncMiddleware");
const ChatModel = require("./models/chatModel");

// setup mongo connection
const uri = process.env.MONGO_CONNECTION_URL;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
mongoose.connection.on("error", error => {
  console.log(error);
  process.exit(1);
});
mongoose.connection.on("connected", function() {
  console.log("connected to mongo");
});
mongoose.set("useFindAndModify", false);

// create an instance of an express app
const app = express();
const server = require("http").Server(app);
const io = require("socket.io").listen(server);

// ===== For headless Phaser =====
// const { JSDOM } = jsdom;

const players = {};

io.on("connection", function(socket) {
  console.log("a user connected: ", socket.id);
  // create a new player and add it to our players object
  players[socket.id] = {
    player_id: socket.id
  };
  // send the players object to the new player
  socket.emit("current_players", players);
  // update all other players of the new player
  socket.broadcast.emit("new_player", players[socket.id]);

  // when a player disconnects, remove them from our players object
  socket.on("disconnect", function() {
    console.log("user disconnected: ", socket.id);
    delete players[socket.id];
    // emit a message to all players to remove this player
    io.emit("disconnect", socket.id);
  });
});

// update express settings
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(cookieParser());

// require passport auth
require("./auth/auth");

// Use this route for production. game.html will be private
app.get(
  "/game.html",
  passport.authenticate("jwt", { session: false }),
  function(req, res) {
    res.sendFile(__dirname + "/public/game.html");
  }
);

// Use this route for development, game.html will be pulbic
// app.get("/game.html", function(req, res) {
//   res.sendFile(__dirname + "/public/game.html");
// });

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

// main routes
app.use("/", routes);
app.use("/", passwordRoutes);
app.use("/", passport.authenticate("jwt", { session: false }), secureRoutes);

// chat route
app.post(
  "/submit-chatline",
  passport.authenticate("jwt", { session: false }),
  asyncMiddleware(async (req, res, next) => {
    const { message } = req.body;
    const { email, name } = req.user;
    await ChatModel.create({ email, message });
    io.emit("new message", {
      username: name,
      message
    });
    res.status(200).json({ status: "ok" });
  })
);

// catch all other routes
app.use((req, res, next) => {
  res.status(404).json({ message: "404 - Not Found" });
});

// handle errors
app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(err.status || 500).json({ error: err.message });
});

// have the server start listening on the provided port
server.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port ${process.env.PORT || 3000}`);
});

// =============== BELOW CODE FOR HEADLESS PHASER ONLY ===============
// function setupAuthoritativePhaser() {
//   JSDOM.fromFile(path.join(__dirname, "server/headless_phaser/index.html"), {
//     // To run the scripts in the html file
//     runScripts: "dangerously",
//     // Also load supported external resources
//     resources: "usable",
//     // So requestAnimatinFrame events fire
//     pretendToBeVisual: true
//   })
//     .then(dom => {
//       dom.window.gameLoaded = () => {
//         server.listen(process.env.PORT || 3000, function() {
//           console.log(`Listening on ${server.address().port}`);
//         });
//       };
//       dom.window.io = io;
//     })
//     .catch(error => {
//       console.log(error.message);
//     });
// }

// setupAuthoritativePhaser();
