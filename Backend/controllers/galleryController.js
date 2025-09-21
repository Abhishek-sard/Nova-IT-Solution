import Gallery from "../models/Gallery.js";
import multer from "multer";
import path from "path";

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // make sure 'uploads' folder exists
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // unique filename
  },
});

export const upload = multer({ storage });

// Create gallery image
export const createGallery = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    const newImage = new Gallery({ image: `/uploads/${req.file.filename}` });
    await newImage.save();
    res.status(201).json(newImage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Read all images
export const getGallery = async (req, res) => {
  try {
    const gallery = await Gallery.find();
    res.json(gallery);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete image
export const deleteGallery = async (req, res) => {
  try {
    await Gallery.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
