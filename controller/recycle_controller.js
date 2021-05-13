const database = require('../db/dbquery');
// const keyword = require('../index.js');

const express = require("express");
const app = express();
app.use(express.json());

let keyword = app.post('/results', function (req, res){
    res.send(req.body.textarea);
});

let recycleController = {
    search: (req,res) => {
        res.render("recycle/index")
    },
    index: (req, res) => {
        res.render("recycle/index")
    },
    results: (req, res) => {
        let items = database.compare_keyword("Item", "can");
        console.log(keyword)
        res.render("recycle/result", { items, keyword });
    }
}

module.exports = recycleController;