import { useState } from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../context/GlobalContext";
import Button from "./Button";
import { plus } from "../utils/Icons";

const ExpenseForm = () => {
    const {addExpense} = useGlobalContext();
    const [input, setInput] = useState({
        amount: "",
        date: new Date(),
        category: "",
        description: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        addExpense(input);
        setInput({
            amount: "",
            date: new Date(),
            category: "",
            description: ""
        })
    }

    return (
        <div className="flex flex-col gap-y-2">
            <input 
                required
                type="number" 
                className="input-control"
                value={input.amount}
                name="amount"
                placeholder="Amount"
                onChange={(e) => setInput({...input, amount: Number(e.target.value)})}
                />
            <DatePicker 
                required
                className="input-control"
                id="date"  
                selected={input.date}
                dateFormat="dd/MM/yyyy"
                onChange={(date) => {
                    setInput({...input, date: date})
                }}
            />
            <select required 
                    className="input-control"
                    value={input.category} 
                    name="category" 
                    id="category"
                    onChange={(e) => setInput({...input, category: e.currentTarget.value})}
                >
                <option value="" disabled >Select Option</option>
                <option value="Education">Education</option>
                <option value="Groceries">Groceries</option>
                <option value="Health">Health</option>
                <option value="Subscriptions">Subscriptions</option>
                <option value="Takeaways">Takeaways</option>
                <option value="Clothing">Clothing</option>  
                <option value="Travelling">Travelling</option>  
                <option value="Other">Other</option> 
            </select>
            <textarea 
                type="text" 
                className="resize-none input-control"
                cols="30"
                rows="4"
                value={input.description}
                name="description"
                placeholder="description"
                onChange={(e) => setInput({...input, description: e.target.value})}
            ></textarea>

            <div className="flex justify-center mt-2">
                <Button 
                    text="Add Expense" 
                    color="white"
                    bg="bg-accent"
                    pad="px-3 py-1.5"
                    icon={plus}
                    bRad="30px"
                    onClick={handleSubmit}
                />
            </div>

        </div>
    )
}

export default ExpenseForm
