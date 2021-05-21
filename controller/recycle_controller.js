const { restart } = require('nodemon');
const database = require('../db/dbquery');

let recycleController = {
    search: (req,res) => {
        res.render("recycle/index")
    },
    index: (req, res) => {
        let items = database.get_list('Item');
        let keyword = req.body.textarea;
        
        res.render("recycle/index", {items});
    },
    results: (req, res) => {
        let keyword = req.body.textarea;
        let items = database.compare_keyword("Item", keyword);
        res.render("recycle/result", { items, keyword });
    },
    adding: (req, res) => {
        res.render("recycle/adding");
    },
    confirm: (req, res) => {
        let data = [];
        let name = req.body.itemName;
        let recycle = req.body.recyclable;
        let deposit = req.body.depositValue;
        let cate = req.body.categoryID;
        let locate = req.body.locationID;
        data.push(name, recycle, deposit, cate, locate);
        console.log(data);
        let add_item = database.insert_item("Item", data);
        res.render("recycle/confirm", {data});
    }
}

module.exports = recycleController;