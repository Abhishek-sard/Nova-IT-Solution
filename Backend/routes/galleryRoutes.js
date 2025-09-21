import express from "express";
import { createGallery, getGallery, deleteGallery, upload } from "../controllers/galleryController.js";

const router = express.Router();

router.post("/", upload.single("image"), createGallery);
router.get("/", getGallery);
router.delete("/:id", deleteGallery);

export default router;
