import { Request, Router } from "express";
import { authenticateToken } from "../middlewares/auth";
import Event from "../models/Event";
import { IMessageEvent } from "../models/MessageEvent";

interface CustomRequest<T> extends Request {
  body: T
}

const router = Router();

router.get("/", authenticateToken, async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

router.post("/", authenticateToken, async (req: CustomRequest<IMessageEvent>, res) => {
  const { 
    plantingId, 
    type, 
    currentUmidity, 
    currentTemperature, 
    currentHour ,
    wateringConditions,
  } = req.body;
  const event = new Event({ plantingId, type, currentUmidity, currentTemperature, currentHour, wateringConditions });
  await event.save();
  res.status(201).json(event);
});

router.put("/:id", authenticateToken, async (req, res) => {
  const { id } = req.params;
  const updatedEvent = await Event.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updatedEvent);
});

router.delete("/:id", authenticateToken, async (req, res) => {
  const { id } = req.params;
  await Event.findByIdAndDelete(id);
  res.status(204).send();
});

export default router;
