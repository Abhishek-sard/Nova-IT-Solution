import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import connectDB from "./config/db.js";
import courseRoutes from "./routes/courseRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(path.resolve(), "uploads")));
app.use("/uploads", express.static(path.join(path.resolve(), "uploads")));


// Routes
app.use("/api/courses", courseRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/gallery", galleryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
