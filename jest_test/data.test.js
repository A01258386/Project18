//get data database
const item = require('../db/dbquery.js').get_list;
// const keyword = 'asd';

// test keyword 'milk carton'
test('getting result with keyword \'milk carton\'', () => {
    expect(item.some(({ ItemName }) => ItemName === 'milk carton')).toBe(true);
});

//test when user keyword not found
test('getting result with keyword \'milk carton\'', () => {
    expect(item.some(({ ItemName }) => ItemName === 'napalm bomb')).not.toBe(true);
});

// //test the keyword not contain special character
// test('expecting keyword not found', () => {
//     expect(keyword).not.toMatch(/[\t\r\n]|(--[^\r\n]*)|(\/\*[\w\W]*?(?=\*)\*\/)/gi);
// });