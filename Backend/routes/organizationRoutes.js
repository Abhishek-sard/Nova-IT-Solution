import express from "express";
import {
  createOrganization,
  getOrganizations,
  updateOrganization,
  deleteOrganization,
  upload,
} from "../controllers/organizationController.js";

const router = express.Router();

router.post("/", upload.single("image"), createOrganization);
router.get("/", getOrganizations);
router.put("/:id", upload.single("image"), updateOrganization);
router.delete("/:id", deleteOrganization);

export default router;
