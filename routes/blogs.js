
const express = require("express");
const {
  getBlogs,
  getBlogById,
  getBlogBySlug,
  createBlog,
  updateBlog,
} = require("../controllers/blogs");

const router = express.Router();

router.get("", getBlogs);
router.get("/:id", getBlogById);
router.get("/s/:slug", getBlogBySlug);
router.post("", createBlog);
router.patch("/:id", updateBlog);

module.exports = router;
