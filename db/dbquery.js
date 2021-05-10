const DB_PATH = './db/project_18.db';
const db = require('better-sqlite3')(DB_PATH);

let get_list = (table) => {
    //get all the data from table
    let stmt;
    try {
        stmt = db.prepare(`SELECT * from ${table}`).all();
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }

    return stmt;
}

let compare_keyword = (table, keyword) => {
    //compare the keyword with the data in table and return
    let stmt;
    try {
        stmt = db.prepare(`SELECT * FROM ${table} WHERE ItemName LIKE \'%${keyword}%\'`).all();
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }

    if (stmt.length !== 0) {
        for (let item of stmt) {
            console.log(`ID: ${item.ItemID} | Item Name: ${item.ItemName}`);
        }
    } else {
        console.log('No item found');
    }

    return stmt;
}

//// testing the function - print out the results
// console.log(get_list('Item'));
// compare_keyword('Item', 'milk carton');

//// export the data so that other file can use
module.exports = get_list('Item');