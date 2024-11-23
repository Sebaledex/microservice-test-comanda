import { Types } from "mongoose";

export interface IComanda extends Document{
    name: string; // Número de la pregunta
    code: string; // El texto de la pregunta
    orders: Types.ObjectId[];
}