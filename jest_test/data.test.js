//get data database
const item = require('../db/dbquery.js');

console.log(item);

test('getting result with keyword \'milk carton\'', () => {
    expect(item).toEqual(expect.arrayContaining(expect.objectContaining({ ItemName: "milk carton" })));
});

// // test keyword 'milk jug'
// test('getting result with keyword \'milk jug\'', () => {
//     expect(item.ItemName).toBe("milk carton");
// });

// //test when user keyword not found
// test('expecting keyword not found', () => {
//     expect(item.ItemName).not.toBe("naphan bomb");
// });

// //test the keyword not contain special character
// test('expecting keyword not found', () => {
//     expect(item.ItemName).not.toMatch(/[\t\r\n]|(--[^\r\n]*)|(\/\*[\w\W]*?(?=\*)\*\/)/gi);
// });