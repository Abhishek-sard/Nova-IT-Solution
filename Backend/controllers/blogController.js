import Blog from "../models/Blog.js";

// Create
export const createBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Read
export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update
export const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete
export const deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
