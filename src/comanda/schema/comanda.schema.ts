import * as mongoose from 'mongoose';


export const ComandaSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        code: { type: String, required: true },
        orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'orders' }]
    },
    { timestamps: true } // Añade createdAt y updatedAt
);