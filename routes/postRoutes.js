const express = require("express");
const router = express.Router();

const {
  getAllPost,
  getAPost,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/postController");
const authorize = require("../middleware/authMiddleware");

router.route("/").get(authorize, getAllPost).post(authorize, createPost);

router
  .route("/:id")
  .get(authorize, getAPost)
  .patch(authorize, updatePost)
  .delete(authorize, deletePost);

module.exports = router;
