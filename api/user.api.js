const { singUp, singIn } = require("../services/user.service");
const app = require("express").Router();
app.post("/singUp", singUp);
app.post("/signIn", singIn);
module.exports = app;
