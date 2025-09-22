import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import dotenv from 'dotenv';

dotenv.config(); // load .env

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET; // now it's loaded

// Create admin (run once)
router.post('/create-admin', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash("Admin123", 10);
    const admin = new User({
      email: "admin@nova.com",
      password: hashedPassword
    });
    await admin.save();
    res.json({ message: "Admin created" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Admin login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "Email and password required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ token, role: user.role });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
