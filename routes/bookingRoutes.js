import express from 'express';
import { bookTickets, getMyBookings } from '../controller/bookingController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, bookTickets);
router.get('/my', protect, getMyBookings);

export default router;
