import Course from "../models/Course.js";
import multer from "multer";
import path from "path";

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // make sure this folder exists
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // unique filename
  },
});

export const upload = multer({ storage });

// Create course
export const createCourse = async (req, res) => {
  try {
    const { title, description, price } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : "";

    const newCourse = new Course({ title, description, price, image });
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update course
export const updateCourse = async (req, res) => {
  try {
    const { title, description, price } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : undefined;

    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      { title, description, price, ...(image && { image }) },
      { new: true }
    );
    res.json(updatedCourse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Read and Delete stay the same
export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
