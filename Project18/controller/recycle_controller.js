const databaseAccess = require("../databaseAccess");

let recycleController = {
    search: (req,res) => {
        const resultFromDatabase = databaseAccess.searchDatabase();
        res.render("recycle/index")
    },
    results: (req,res)=> {
        res.render("recycle/result")
    }
}

module.exports = recycleController;