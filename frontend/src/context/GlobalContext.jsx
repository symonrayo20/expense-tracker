import axios from 'axios';
import { createContext, useContext, useState } from 'react'

const BASE_URL = "http://localhost:5000/api/";

const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [showAddIncome, setShowAddIncome] = useState(false);
    const [showAddExpense, setShowAddExpense] = useState(false);
    const [error, setError] = useState(null);

    
    const getIncomes = async () => {
        const res = await axios.get(`${BASE_URL}get-income`);
        setIncomes(res.data);
    }
    const totalIncome = () => {
        let total = 0;
        incomes.forEach(income => {
            total += income.amount;
        })
        return total;
    }
    const addIncome = async (income) => {
        const res = await axios.post(`${BASE_URL}add-income`, income);
        setShowAddIncome(false);
        setIncomes([res.data, ...incomes]);

    }
    const deleteIncome = async (id) => {
        const res = await axios.delete(`${BASE_URL}delete-income/${id}`);
        setIncomes(incomes.filter(income => {
            return income._id !== id && income;
        }))
    }

    const getExpenses = async () => {
        const res = await axios.get(`${BASE_URL}get-expense`);
        setExpenses(res.data);
    }
    const totalExpense = () => {
        let total = 0;
        expenses.forEach(expense => {
            total += expense.amount;
        })
        return total;
    }
    const addExpense = async (expense) => {
        const res = await axios.post(`${BASE_URL}add-expense`, expense);
        setShowAddExpense(false);
        setExpenses([res.data, ...expenses]);
    }
    const deleteExpense = async (id) => {
        const res = await axios.delete(`${BASE_URL}delete-expense/${id}`);
        setExpenses(expenses.filter(expense => {
            return expense._id !== id && expense;
        }))
    }

    const transactionHistory = () => {
        const history = [...incomes, ...expenses];
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
        })
        return history.slice(0, 3);
    }
    
    return (
        <GlobalContext.Provider value={{
            incomes,
            getIncomes,
            addIncome,
            showAddIncome,
            setShowAddIncome,
            deleteIncome,
            totalIncome,

            expenses,
            getExpenses,
            addExpense,
            showAddExpense,
            setShowAddExpense,
            deleteExpense,
            totalExpense,

            transactionHistory

        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}

