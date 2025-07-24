import Event from "../model/eventModel.js";

export const createEvent = async (data) => {
  return await Event.create(data);
};

export const getAllEvents = async () => {
  return await Event.find().sort({ date: 1 });
};

export const getEventById = async (id) => {
  return await Event.findById(id);
};

export const updateEvent = async (id, data) => {
  return await Event.findByIdAndUpdate(id, data, { new: true });
};

export const deleteEvent = async (id) => {
  return await Event.findByIdAndDelete(id);
};
