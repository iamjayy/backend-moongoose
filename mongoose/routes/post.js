const express = require("express");
const {
  getPosts,
  createPost,
  postsByUser,
  postById,
  isPoster,
  deletePost
} = require("../controllers/post");
const { requireSignin } = require("../controllers/auth");
const { userById } = require("../controllers/user");
const { createPostValidator } = require("../validators");

const router = express.Router();

router.get("/", getPosts);
router.post(
  "/post/new/:userId",
  requireSignin,
  createPost,
  createPostValidator
);

router.get("/posts/by/:userId", requireSignin, postsByUser);
router.delete('/post/:postId', requireSignin, isPoster, deletePost)

router.param("userId", userById);
router.param("userId", postById);

module.exports = router;
