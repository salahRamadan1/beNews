const comModel = require("../model/comments.model");
const { createTryAndCatch } = require("../utlis/catchAsyncError");
module.exports.addComment = createTryAndCatch(async (req, res) => {
  const { comment, createdByIdUser, createdByIdNews } = req.body;
  let data = await comModel.insertMany({
    comment,
    createdByIdUser,
    createdByIdNews,
  });
  res.json({ message: "success", data });
})
module.exports.getComment = createTryAndCatch(async (req, res) => {
  const createdByIdNews = req.header("_id");
  const data = await comModel
    .find({ createdByIdNews })
    .populate("createdByIdUser")
    .populate("createdByIdNews");
  res.json({ message: "success", data });
})
module.exports.getCommentNote = createTryAndCatch(async (req, res) => {
  const _id = req.header("_id");
  const data = await comModel
    .find({ _id })
    .populate("createdByIdNews", " title  desc ");
  res.json({ message: "success", data });
})
module.exports.deleteCom = createTryAndCatch(async (req, res) => {
  const { _id } = req.body;
  await comModel.deleteMany({ _id });
  res.json({ message: "success" });
})
module.exports.updateCom = createTryAndCatch(async (req, res) => {
  const { _id, comment } = req.body;
  await comModel.updateMany({ _id }, { comment });
  res.json({ message: "success" });
})
