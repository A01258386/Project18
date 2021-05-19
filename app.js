// This is the app file, It will hold the basic code
// that makes the webpages from the links.
const express = require("express");
const app = express();
const path = require("path");
const ejsLayouts = require("express-ejs-layouts");
const recycleController = require("./controller/recycle_controller");

app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({ extended: false}));
app.use(ejsLayouts);

app.set("view engine", "ejs");

// app.get("/recycle",recycleController.search)
app.post("/results", recycleController.results)
app.get("/", recycleController.index)

let port = process.env.PORT || 3002;
app.listen(port, function () {
    console.log(
        "Server running. Visit: localhost:3002"
    )
})

