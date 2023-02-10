const Post = require("../models/postModels");

const getAllPost = async (req, res, next) => {
  console.log("yuo hit my twins");
  try {
    console.log(req.url);
    console.log("Something broke ?");
    const posts = await Post.find();

    res.status(200).json({
      status: "success",
      results: posts.length,
      data: {
        posts,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
    });
  }
};

const getAPost = async (req, res, next) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);

    res.status(200).json({
      status: "success",
      data: {
        post,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
    });
  }
};

const createPost = async (req, res, next) => {
  const { title, body } = req.body;
  try {
    const post = await Post.create({ title, body });

    res.status(200).json({
      status: "success",
      data: {
        post,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
    });
  }
};

const updatePost = async (req, res, next) => {
  const { id } = req.params;
  const { title, body } = req.body;
  try {
    const post = await Post.findByIdAndUpdate(
      id,
      { title, body },
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      status: "success",
      data: {
        post,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
    });
  }
};

const deletePost = async (req, res, next) => {
  const { id } = req.params;
  try {
    const post = await Post.findByIdAndDelete(id);

    res.status(200).json({
      status: "success",
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
    });
  }
};

module.exports = {
  getAllPost,
  getAPost,
  createPost,
  updatePost,
  deletePost,
};
