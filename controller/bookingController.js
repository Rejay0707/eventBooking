import { createBooking, getUserBookings } from '../service/bookingService.js';

export const bookTickets = async (req, res) => {
  try {
    const { eventId, ticketType, quantity } = req.body;
    const userId = req.user.id;

    const booking = await createBooking(userId, eventId, ticketType, quantity);
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

export const getMyBookings = async (req, res) => {
  try {
    const bookings = await getUserBookings(req.user.id);
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
