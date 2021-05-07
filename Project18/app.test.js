const request = require("supertest");
const app = require("./app");
const databaseAccess = require("./databaseAccess")

test("it should return water bottle from database", async () => {
    const response = databaseAccess.searchDatabase();
    expect(response).toEqual({name: "waterbottle"})
})

