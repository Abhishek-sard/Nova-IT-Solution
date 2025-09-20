import express from "express";
import { createBlog, getBlogs, updateBlog, deleteBlog, upload } from "../controllers/blogController.js";

const router = express.Router();

// Image upload with Multer
router.post("/", upload.single("image"), createBlog);
router.get("/", getBlogs);
router.put("/:id", upload.single("image"), updateBlog);
router.delete("/:id", deleteBlog);

export default router;
