import express from "express";
import { createCourse, getCourses, updateCourse, deleteCourse, upload } from "../controllers/courseController.js";

const router = express.Router();

router.post("/", upload.single("image"), createCourse);
router.get("/", getCourses);
router.put("/:id", upload.single("image"), updateCourse);
router.delete("/:id", deleteCourse);

export default router;
