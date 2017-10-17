// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
var express = require("express");
var moment = require("moment");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");
var bodyParser = require("body-parser");
// Sets up the Express App
// Requiring our models for syncing
var db = require("./models");
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  console.log('Database looks fine, App listening on PORT ' + PORT);
}).catch(function(err) {
console.log(err, "Something went wrong with the Database Update!");
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
