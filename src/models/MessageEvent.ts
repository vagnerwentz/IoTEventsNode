import { WateringConditions } from "./Event";

export interface IMessageEvent {
    plantingId: string;
    type: string;
    currentTemperature: number;
    currentUmidity: number;
    currentHour: Date;
    wateringConditions: WateringConditions;
}