const userModel = require("../model/user.model");
var jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const { createTryAndCatch } = require("../utlis/catchAsyncError");

module.exports.singUp = createTryAndCatch(async (req, res) => {
  const { email, name, password, age } = req.body;
  const user = await userModel.findOne({ email });
  if (user) {
    res.json({ message: " EMAIL ALREADY EXIT" });
  } else {
    bcrypt.hash(password, 4, async function (err, hash) {
      const data = await userModel.insertMany({
        email,
        name,
        password: hash,
        age,
      });
      
      res.json({ message: "success" });
    });
  }
})
module.exports.singIn = createTryAndCatch(async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  console.log(user);
  if (user) {
    const match = await bcrypt.compare(password, user.password);
    var token = jwt.sign({role:'user' ,user } , 'token');
    if (match) {
      res.json({ message: "success", token });
    } else {
      //
      res.json({ message: "password incorrect" });
    }
  } else {
    res.json({ message: "Email NOT FOUND" });
  }
}
)