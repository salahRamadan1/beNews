const express = require("express");
const { dbConnection } = require("./database/databaseConnection");
const app = express();
const cors = require("cors");
const globalMiddelWareHandling = require("./utlis/globalMiddelWareHandling");
app.use(cors());
app.use(express.json());
app.use("/user", require("./api/user.api"));
app.use("/news", require("./api/news.api"));
app.use("/com", require("./api/comments.api"));
app.all("*", (req, res, next) => {
  next(
    new AppError(` can't find this route : ${req.originalUrl} on server `, 404)
  );
});
app.use(globalMiddelWareHandling);
dbConnection();
app.listen(2000, () => {
  console.log("server is running");
});
