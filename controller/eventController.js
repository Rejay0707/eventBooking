import {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent
} from '../service/eventService.js';

export const create = async (req, res) => {
  try {
    const event = await createEvent(req.body);
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

export const getAll = async (req, res) => {
  try {
    const events = await getAllEvents();
    res.json(events);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const getOne = async (req, res) => {
  try {
    const event = await getEventById(req.params.id);
    if (!event) return res.status(404).json({ msg: "Event not found" });
    res.json(event);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const update = async (req, res) => {
  try {
    const event = await updateEvent(req.params.id, req.body);
    if (!event) return res.status(404).json({ msg: "Event not found" });
    res.json(event);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

export const remove = async (req, res) => {
  try {
    const event = await deleteEvent(req.params.id);
    if (!event) return res.status(404).json({ msg: "Event not found" });
    res.json({ msg: "Event deleted" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
