const app = require("./app").app;

let port = process.env.PORT || 3002;

app.listen(port);