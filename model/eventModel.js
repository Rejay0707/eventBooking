import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  time: String,
  location: String,
  image: String,
  seatTypes: {
    regular: {
      price: Number,
      total: Number,
      available: Number,
    },
    vip: {
      price: Number,
      total: Number,
      available: Number,
    }
  }
}, { timestamps: true });


const Event = mongoose.model('Event', eventSchema);
export default Event;
