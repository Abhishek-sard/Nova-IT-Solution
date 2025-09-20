import Organization from "../models/Organization.js";
import multer from "multer";
import path from "path";
import fs from "fs";

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = "./uploads/organizations";
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

export const upload = multer({ storage });

// Create Organization
export const createOrganization = async (req, res) => {
  try {
    const newOrg = await Organization.create({ image: req.file.path });
    res.json(newOrg);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Organizations
export const getOrganizations = async (req, res) => {
  try {
    const organizations = await Organization.find();
    res.json(organizations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Organization
export const updateOrganization = async (req, res) => {
  try {
    const updatedOrg = await Organization.findByIdAndUpdate(
      req.params.id,
      { image: req.file ? req.file.path : req.body.image },
      { new: true }
    );
    res.json(updatedOrg);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete Organization
export const deleteOrganization = async (req, res) => {
  try {
    await Organization.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
