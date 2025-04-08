const express = require("express");
const app = express()


app.use(express.json());

const user = require("./routes/user.routes");


app.use("/api/users", user);
// app.post("/api/users", user);

module.exports = app //exports app 