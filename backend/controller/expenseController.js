import { Expense } from "../models/expenseModel.js";

export const getExpense = async (req, res) => {
    try {
        const expense = await Expense.find().sort({createdAt: -1});
        return res.status(200).send(expense);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({Error: "Get Expense Error"})
    }
}

export const addExpense = async (req, res) => {
    try {
        if(!req.body.amount || !req.body.category || !req.body.date) {
            return res.status(404).send({message: "Please fill up all required fields"});
        }
        if(req.body.amount <= 0 || typeof req.body.amount !== "number") {
            return res.status(400).send({message: "Amount must be greater than 0 and must be a number"});
        }

        const result = await Expense.create(req.body);
        return res.status(201).send(result);

    } catch (error) {
        console.log(error.message);
        return res.status(500).send({Error: "Add Expense Error"})
    }
}

export const updateExpense = async (req, res) => {
    try {
        if(!req.body.amount || !req.body.category || !req.body.date) {
            return res.status(404).send({message: "Please fill up all required fields"});
        }
        if(req.body.amount <= 0 || typeof req.body.amount !== "number") {
            return res.status(400).send({message: "Amount must be greater than 0 and must be a number"});
        }

        const {id} = req.params;
        const result = await Expense.findByIdAndUpdate(id, req.body, {new: true});

        return (result) ? res.status(200).send({message: "updated Expense Succesfully", data: result})
                        : res.status(404).send({message: "Expense Not Found"});

    } catch (error) {
        console.log(error.message);
        return res.status(500).send({Error: "Update Expense Error"})
    }
}

export const deleteExpense = async (req, res) => {
    try {
        const {id} = req.params;
        await Expense.findByIdAndDelete(id);
        return res.status(200).send({message: "Expense Deleted Successfully"});
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({Error: "Delete Expense Error"})
    }
}

