"use strict";

var express = require("express");
var drumkitController = require("./controllers/drumkitController");
var app = express();

app.use("/assets", express.static("assets"));

drumkitController(app);

app.listen(1234);
