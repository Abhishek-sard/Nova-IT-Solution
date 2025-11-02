import express from "express";
import mongoose from "mongoose"; // needed for ObjectId validation
import Blog from "../models/Blog.js"; // ✅ important
import { createBlog, getBlogs, updateBlog, deleteBlog, upload } from "../controllers/blogController.js";

const router = express.Router();

// Get single blog safely
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  // Validate MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid blog ID" });
  }

  try {
    const blog = await Blog.findById(id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    res.json(blog);
  } catch (error) {
    console.error(error); // 🔹 check your terminal logs
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
