import Blog from "../models/Blog.js";
import multer from "multer";
import path from "path";

// Multer setup for image uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

export const upload = multer({ storage });

// Create Blog
export const createBlog = async (req, res) => {
  try {
    const { title, author, description } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : "";
    const newBlog = new Blog({ title, author, description, image });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Blogs
export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ date: -1 }); // latest blogs first
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Single Blog by ID
export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Blog
export const updateBlog = async (req, res) => {
  try {
    const { title, author, description } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : undefined;

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { title, author, description, ...(image && { image }) },
      { new: true }
    );

    res.json(updatedBlog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Blog
export const deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
