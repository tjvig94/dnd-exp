//Dependencies
const express = require("express");
const exphbs = require("express-handlebars");

const path = require("path");

const db = require("./models");

//Created Server
const app = express();
const PORT = process.env.PORT || 3001;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//HTML Routes
app.get("/", (req, res) => res.render("home"));


//Set static folder
app.use(express.static(path.join(__dirname, "public")));

//Server listener

  app.listen(PORT, console.log(`Server started on port ${PORT}`));


