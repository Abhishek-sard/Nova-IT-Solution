import express from 'express';
import { createOrganization, getOrganizations, updateOrganization,deleteOrganization } from '../controllers/organizationController.js';


const router = express.Router();

router.post('/', createOrganization);
router.get('/', getOrganizations);
router.put('/:id', updateOrganization);
router.delete('/:id', deleteOrganization);

export default router;