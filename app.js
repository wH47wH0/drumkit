const express = require("express");
const drumkitController = require(`./controllers/drumkitController`);
const app = express();

app.use("/assets", express.static(`assets`)); 

drumkitController(app); 

app.listen(1234);
