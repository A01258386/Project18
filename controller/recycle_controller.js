const database = require('../db/dbquery.js');
const keyword = require('../index.js');

let recycleController = {
    search: (req,res) => {
        res.render("recycle/index")
    },
    index: (req, res) => {
        res.render("recycle/index")
    },
    results: (req, res) => {
        let item = database.compare_keyword("Item", 'milk');
        console.log(keyword);
        res.render("recycle/result", { item, keyword });
    }
}

module.exports = recycleController;