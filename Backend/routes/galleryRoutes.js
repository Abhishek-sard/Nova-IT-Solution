import express from 'express';
import { createGallery, getGallery, updateGallery, deleteGallery } from '../controllers/galleryController';


const router = express.Router();

router.post("/", createGallery);
router.get("/", getGallery);
router.put("/:id", updateGallery);
router.delete("/:id", deleteGallery);

export default router;