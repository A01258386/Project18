const DB_PATH = './db/project_18.db';
const db = require('better-sqlite3')(DB_PATH);
// const keyword = require('../controller/recycle_controller.js');

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

let check_keyword = (key) => {
    let alphanumeric = /[\t\r\n]|(--[^\r\n]*)|(\/\*[\w\W]*?(?=\*)\*\/)/gi;
    if (key.match(alphanumeric)){
        return true;
    }
    else return false;
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
        return stmt;
    } else {
        return null;
    }
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
// compare_keyword('Item', 'milk');
// let data = ['sink', 'yes', '15 cent', 1, 2];
// add_to_table('Item', data);
// remove_data('Item', 'sink');
// console.log(get_list('Item'));

//// export the data so that other file can use
module.exports = {
    get_list: get_list,
    // keyword: router,
    compare_keyword: compare_keyword,
    check_keyword: check_keyword,
};

// closed the connection
// db.close();