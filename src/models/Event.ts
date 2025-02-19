import mongoose, { Schema, Document } from "mongoose";

export interface IEvent extends Document {
    plantingId: string,
    type: string;
    currentTemperature: number;
    currentUmidity: number;
    currentHour: Date;
    wateringConditions: WateringConditions;
}

export interface WateringConditions {
    minimumTemperature: number;
    maximumTemperature: number;
    minimumHumidity: number;
    maximumHumidity: number;
    idealSchedule: string;
}

const WateringConditionsSchema = new Schema({
    minimumTemperature: { type: Number, required: true },
    maximumTemperature: { type: Number, required: true },
    minimumHumidity: { type: Number, required: true },
    maximumHumidity: { type: Number, required: true },
    idealSchedule: { type: String, required: true }
  });

const EventSchema: Schema = new Schema({
    plantingId: { type: String, required: true},
    type: { type: String, required: true },
    currentHour: { type: Date, required: true },
    currentUmidity: { type: Number, required: true},
    currentTemperature: { type: Number, required: true},
    wateringConditions: { type: WateringConditionsSchema, required: true }
  });
  
  export default mongoose.model<IEvent>("Event", EventSchema);