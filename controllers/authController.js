const User = require("../models/userModels");
const bycryptjs = require("bcryptjs");

const signUp = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bycryptjs.hash(password, 10);
  try {
    const user = await User.create({
      username,
      password: hashedPassword,
    });
    req.session.user = user;

    res.status(201).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "failed",
    });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({
      username,
    });
    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "user not found !",
      });
    }
    const correctPassword = bycryptjs.compare(password, user.password);
    if (correctPassword) {
      req.session.user = user;
      res.status(200).json({
        status: "success",
      });
    } else {
      res.status(400).json({
        status: "fail",
        message: "password not correct",
      });
    }
  } catch (e) {
    res.status(400).json({
      status: "failed",
    });
  }
};

module.exports = {
  signUp,
  login,
};
