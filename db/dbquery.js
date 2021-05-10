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

let add_to_table = (table, data) => {
    //add new row to database
    let insert;
    try {
        insert = db.prepare(`INSERT INTO ${table} 
        (ItemID, ItemName, Recyclable, DepositValue, CategoryId, LocationID) 
        VALUES (NULL, ?, ?, ?, ?, ?)`);
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }

    if (data.length !== 0) {
        let insereted = insert.run(data[0], data[1], data[2], data[3], data[4]);
        console.log('Insert sucess');
        console.log(insereted.lastInsertRowid);
    } else {
        console.log('Please enter data to insert');
    }
}

let remove_data = (table, keyword) => {
    // delete item from table with the keyword
    let delete_statement;
    try {
        delete_statement = db.prepare(`DELETE FROM ${table} WHERE ItemName=?`);
        delete_statement.run(keyword);
        console.log(`${keyword} deleted from ${table} table`);
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

//// testing the function - print out the results
// console.log(get_list('Item'));
// compare_keyword('Item', 'milk carton');
// let data = ['sink', 'yes', '15 cent', 1, 2];
// add_to_table('Item', data);
// remove_data('Item', 'sink');
// console.log(get_list('Item'));

//// export the data so that other file can use
module.exports = get_list('Item');

// closed the connection
db.close();