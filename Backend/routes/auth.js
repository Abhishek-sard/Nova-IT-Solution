import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();
const JWT_SECRET = ""; //storing the secret key in .env


router.post('/create-admin', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash("Admin123", 10);
        const admin = new User({
            email: "admin@nova.com", password: hashedPassword
        });
        await admin.save();
        res.json({message: "Admin created"});
    } catch (error) {
        res.status(500).json({error: error.message});
        
    }
});

router.post("/login", async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({email});
        if(!user) return res.status(400).json({message: "Invalid credentials"});


        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({message: "Invalid credentials"});

        const token = jwt.sign(
            {id: user._id, role: user.role},
            JWT_SECRET,
            {expiresIn: "1d"}
        );
        res.json({token, role: user.role});
    } catch (error) {
        res.status(500).json({error: error.message})
        
    }
});

export default router;

