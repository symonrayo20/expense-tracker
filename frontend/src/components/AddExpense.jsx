import ExpenseForm from "./ExpenseForm"
import { MdClose } from "react-icons/md"

const AddExpense = ({close}) => {
    return (
        <div 
            className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50"
            onClick={close}
        >
            <div className="relative rounded-lg  p-4 bg-add w-[400px]" onClick={(e) => e.stopPropagation()}>
                <h1 className="mb-4 text-lg text-center font-[500] text-primary4">Add Expense</h1>
                <MdClose 
                    className="absolute text-primary4 top-5 right-4 text-xl cursor-pointer" 
                    onClick={close}
                />
                <ExpenseForm />
            </div>
        </div>
    )
}

export default AddExpense
