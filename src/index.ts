import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import eventRoutes from "./routes/eventRoutes";
import loginRoutes from "./routes/authenticationRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/auth", loginRoutes);
app.use("/events", eventRoutes);

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/iot").then(() => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.error(err));
