import express from 'express';
import { create, getAll, getOne, update, remove } from '../controller/eventController.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public
router.get('/', getAll);
router.get('/:id', getOne);

// Admin only
router.post('/', protect, adminOnly, create);
router.put('/:id', protect, adminOnly, update);
router.delete('/:id', protect, adminOnly, remove);

export default router;
