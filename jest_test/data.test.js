//get data database
const item = require('../db/dbquery.js');

// test keyword 'milk jug'
test('getting result with keyword \'milk jug\'', () => {
    expect(item.ItemName).toBe("milk jug");
});

//test when user keyword not found
test('expecting keyword not found', () => {
    expect(item.ItemName).not.toBe("naphan bomb");
});

//test the keyword not contain special character
test('expecting keyword not found', () => {
    expect(item.ItemName).not.toMatch(/[\t\r\n]|(--[^\r\n]*)|(\/\*[\w\W]*?(?=\*)\*\/)/gi);
});