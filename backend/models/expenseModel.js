import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema(
    {
        amount: {
            type: Number,
            required: true,
            trim: true,
            maxLength: 20
        },
        type: {
            type: String,
            default: "expense"
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

export const Expense = mongoose.model("Expense", ExpenseSchema);

