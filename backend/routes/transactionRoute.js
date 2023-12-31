import express from "express";
import { getIncome, addIncome, updateIncome, deleteIncome } from "../controller/incomeController.js";
import { getExpense, addExpense, updateExpense, deleteExpense } from "../controller/expenseController.js";

const transactionRouter = express.Router();

transactionRouter.get("/get-income", getIncome)
                .post("/add-income", addIncome)
                .put("/update-income/:id", updateIncome)
                .delete("/delete-income/:id", deleteIncome)

                .get("/get-expense", getExpense)
                .post("/add-expense", addExpense)
                .put("/update-expense/:id", updateExpense)
                .delete("/delete-expense/:id", deleteExpense);


export default transactionRouter;
