import express from "express";
import mongoose from "mongoose";
import Blog from "../models/Blog.js";
import { createBlog, getBlogs, updateBlog, deleteBlog, upload } from "../controllers/blogController.js";

const router = express.Router();

// Create blog
router.post("/", upload.single("image"), createBlog);

// Get all blogs
router.get("/", getBlogs);

// Get single blog
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  // Check if id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid blog ID" });
  }

  try {
    const blog = await Blog.findById(id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    res.json(blog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Update blog
router.put("/:id", upload.single("image"), updateBlog);

// Delete blog
router.delete("/:id", deleteBlog);

export default router;
