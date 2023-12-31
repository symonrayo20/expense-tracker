import { Income } from "../models/incomeModel.js";

export const getIncome = async (req, res) => {
    try {
        const income = await Income.find().sort({createdAt: -1});
        return res.status(200).send(income);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({Error: "Get Income Error"})
    }
}

export const addIncome = async (req, res) => {
    try {
        if(!req.body.amount || !req.body.category || !req.body.date) {
            return res.status(404).send({message: "Please fill up all required fields"});
        }
        if(req.body.amount <= 0 || typeof req.body.amount !== "number") {
            return res.status(400).send({message: "Amount must be greater than 0 and must be a number"});
        }

        const result = await Income.create(req.body);
        return res.status(201).send(result);

    } catch (error) {
        console.log(error.message);
        return res.status(500).send({Error: "Add Income Error"})
    }
}

export const updateIncome = async (req, res) => {
    try {
        if(!req.body.amount || !req.body.category || !req.body.date) {
            return res.status(404).send({message: "Please fill up all required fields"});
        }
        if(req.body.amount <= 0 || typeof req.body.amount !== "number") {
            return res.status(400).send({message: "Amount must be greater than 0 and must be a number"});
        }

        const {id} = req.params;
        const result = await Income.findByIdAndUpdate(id, req.body, {new: true});

        return (result) ? res.status(200).send({message: "updated Income Succesfully", data: result})
                        : res.status(404).send({message: "Income Not Found"});

    } catch (error) {
        console.log(error.message);
        return res.status(500).send({Error: "Update Income Error"})
    }
}

export const deleteIncome = async (req, res) => {
    try {
        const {id} = req.params;
        await Income.findByIdAndDelete(id);
        return res.status(200).send({message: "Income Deleted Successfully"});
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({Error: "Delete Income Error"})
    }
}

