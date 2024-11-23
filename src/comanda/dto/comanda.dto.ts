import { Types } from "mongoose";

export class ComandaDTO {
  readonly name: string; 
  readonly code: string; 
  readonly orders?: Types.ObjectId[];
}

