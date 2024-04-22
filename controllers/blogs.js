const mongoose = require("mongoose");

const Blog = mongoose.model("Blog");

exports.getBlogs = async (_, res) => {
  const blogs = await Blog.find({status: "published"}).sort({created: -1 });
  return res.json(blogs);
}

exports.getBlogById = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  return res.json(blog);
}

exports.getBlogBySlug = async (req, res) => {
  const blog = await Blog.findOne({slug: req.params.slug});
  return res.json(blog);
}

exports.createBlog = async (req, res) => {
  const blogData = req.body;
  const blog = new Blog(blogData);
  
  try {
    const newBlog = await blog.save();
    return res.json(newBlog);
  } catch (error) {
    return res.status(422).send(error.message);
  }
}

exports.updateBlog = async (req, res) => {
  const { body, params: {id}} = req;

  try {
    const blog = await Blog.findById(id);
    blog.set(body);
    blog.updatedDate = new Date();

    const blogData = await new Blog(blog);
    const updatedBlog = await blogData.save();
    return res.json(updatedBlog);
  } catch (error) {
    return res.status(422).send(error.message);
  }
}
