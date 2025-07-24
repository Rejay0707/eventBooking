import Event from '../model/eventModel.js';
import Booking from '../model/bookingModel.js';

export const createBooking = async (userId, eventId, ticketType, quantity) => {
  const event = await Event.findById(eventId);
  if (!event) throw new Error("Event not found");

  const seatInfo = event.seatTypes[ticketType];
  if (!seatInfo) throw new Error("Invalid ticket type");

  if (seatInfo.available < quantity) {
    throw new Error("Not enough seats available");
  }

  seatInfo.available -= quantity;
  await event.save();

  const totalPrice = quantity * seatInfo.price;

  const booking = await Booking.create({
    userId,
    eventId,
    ticketType,
    quantity,
    totalPrice
  });

  return booking;
};

export const getUserBookings = async (userId) => {
  return await Booking.find({ userId }).populate('eventId');
};
