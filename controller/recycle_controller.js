let recycleController = {
    search: (req, res) => {
        res.render("recycle/index")
    },
    results: (req, res) => {
        res.render("recycle/result")
    },
}

module.exports = recycleController;