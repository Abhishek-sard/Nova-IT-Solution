import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import dotenv from 'dotenv';

dotenv.config(); // load .env

const router = express.Router();


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

export default router;
