import mongoose from "mongoose";

const IncomeSchema = new mongoose.Schema(
    {
        amount: {
            type: Number,
            required: true,
            trim: true,
            maxLength: 20
        },
        type: {
            type: String,
            default: "income"
        },
        date: {
            type: Date,
            require: true,
            trim: true
        }, 
        category: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: false,
            trim: true,
            maxLength: 20
        }

    },
    { timestamps: true }
)

export const Income = mongoose.model("Income", IncomeSchema);

