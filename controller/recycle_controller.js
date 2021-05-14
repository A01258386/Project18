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
    }
}

module.exports = recycleController;