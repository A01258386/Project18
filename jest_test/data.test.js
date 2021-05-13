//get data database
const item = require('../db/dbquery.js').get_list;
const compare = require('../db/dbquery').compare_keyword;
const keyword = require('../db/dbquery').check_keyword('asd');

// test keyword 'milk carton'
test('getting result with keyword \'milk carton\'', () => {
    expect(item('Item').some(({ ItemName }) => ItemName === 'milk carton')).toBe(true);
});

//test when user keyword not found
test('getting result with keyword \'napalm bomb\'', () => {
    expect(item('Item').some(({ ItemName }) => ItemName === 'napalm bomb')).not.toBe(true);
});

// no data match the keyword
test('getting null when keyword not found in database', ()=>{
    expect(compare('Item', 'asd')).toBe(null);
});

//test the keyword not contain special character
test('expecting keyword not contain any non alphanumeric characters', () => {
    expect(keyword).toBe(false);
});