import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext"
import Button from "./Button";
import { plus } from "../utils/Icons";
import ExpenseItem from "./ExpenseItem";

const Expense = () => {
    const {expenses, getExpenses, totalExpense} = useGlobalContext();
    const {setShowAddExpense} = useGlobalContext();

    useEffect(() => {
        getExpenses();
    }, [])

    return (
        <div className="flex flex-col gap-y-4">
            <div className="flex justify-between">
                <h1 className="text-lg text-primary4 font-[500]">My Expenses</h1>
                <Button 
                    text="Add Expense" 
                    color="white"
                    bg="bg-primary2"
                    pad="px-3 py-1.5"
                    icon={plus}
                    bRad="30px"
                    onClick={() => setShowAddExpense(true)}
                    />
            </div>
            <div className="text-center text-sm font-[500] rounded-xl p-2 shadow-md border-2 border-white bg-[#FCF6F9] text-primary4">
                Total Expense: <span className="text-green">${new Intl.NumberFormat().format(totalExpense())}</span>
            </div>
            <div className="flex-1 flex flex-col gap-y-2 text-xs"> 
                {expenses.map(expense => {
                    return <ExpenseItem key={expense._id} expense={expense} />
                })}
            </div>
        </div>
    )
}

export default Expense
