const newsModel = require("../model/news.model");
var jwt = require("jsonwebtoken");
const { createTryAndCatch } = require("../utlis/catchAsyncError");

module.exports.addNews = createTryAndCatch( async (req, res) => {
  const { title, desc, createdBy, token } = req.body;
  jwt.verify(token, "token", async function (err, decoded) {
    if (err) {
      res.json({ err });
    } else {
      await newsModel.insertMany({ title, desc, createdBy });
      res.json({ message: "success" });
    }
  });
})
module.exports.deleteNews = createTryAndCatch(async (req, res) => {
  const { _id, token } = req.body;
  jwt.verify(token, "token", async function (err, decoded) {
    if (err) {
      res.json({ message: " err token", err });
    } else {
      await newsModel.deleteMany({ _id, token });
      res.json({ message: "deleted" });
    }
  });
})
module.exports.getAllNews = createTryAndCatch( async (req, res) => {
  const data = await (
    await newsModel.find({}).populate("createdBy", "createdAt name")
  ).reverse();
  res.json({ message: "success", data });
})
module.exports.userNews = createTryAndCatch(async (req, res) => {
  const createdBy = req.header("_id");
  const data =  (await newsModel.find({ createdBy })).reverse();
  if (data.length > 0) {
    res.json({ message: "success", data });
  } else {
    res.json({ message: "not found news" });
  }
})
module.exports.getNewsById = createTryAndCatch( async (req, res) => {
  const _id = req.header("_id");
  const news = await newsModel.find({ _id }).populate("createdBy");
  res.json({ message: "success", news });
})
module.exports.getNewsByTitle = createTryAndCatch(async (req, res) => {
  const title = req.header("title");
  const news = await newsModel.find({ title }).populate("createdBy");
  res.json({ message: "success", news });
})

module.exports.UpdateNews = createTryAndCatch(async (req, res) => {
  const { desc, title, _id, token } = req.body;
  jwt.verify(token, "token", async function (err, decoded) {
    if (err) {
      res.json({ message: " err token", err });
    } else {
      let news = await newsModel.updateMany({ _id, token }, { desc, title });
      res.json({ message: "success", news });
    }
  });
})
