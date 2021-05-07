const sqlite3 = require('sqlite3').verbose();

function getData(keyword){
    // open the database
    let db = new sqlite3.Database('./db/project_18.db');

    let sql = `SELECT * FROM Item`;
    let items = db.each(sql, [], (err, rows) => {
    if (err) {
        return null;
    }
    // rows.forEach((row) => {
    //     console.log(
    //         row.ItemID,
    //         row.ItemName,
    //         row.Recyclable,
    //         row.DepositValue,
    //         row.CategoryID,
    //         row.LocationID
    //     );
    // });
    // console.log(rows[1]);
    return rows;
    });
    // close the database connection
    db.close();
}

module.exports = getData;