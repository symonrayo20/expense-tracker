import { dollar, calender, trash, comment, book, food, medical, tv, takeaway, clothing, freelance, circle } from '../utils/Icons';
import { useGlobalContext } from '../context/GlobalContext';
import Button from './Button';

const ExpenseItem = ({expense}) => {
    const {deleteExpense} = useGlobalContext();

    const categoryIcon = (category) => {
        switch (category) {
            case 'Education':
                return book;
            case 'Groceries':
                return food;
            case 'Health':
                return medical;
            case 'Subscriptions':
                return tv;
            case 'Takeaways':
                return takeaway;
            case 'Clothing':
                return clothing;
            case 'Travelling':
                return freelance;
            case 'Other':
                return circle;
            default:
                return ''
        }
    }

    return (
        <div className="flex items-center p-4 rounded-[20px] shadow-md border-2 border-white bg-[#FCF6F9] ">
            <div className="w-10 text-lg">
                {categoryIcon(expense.category)}
            </div>
            <div className="flex-1 flex-col space-y-2">
                <div className="flex gap-x-4 items-center">
                    <span className="h-2 w-2 bg-green block rounded-full"></span>
                    <h5 className="font-[500] text-primary4">From {expense.category}</h5>
                </div>
                <div className="flex items-center gap-x-3 ">
                    <p className="flex items-center">{dollar}{new Intl.NumberFormat().format(expense.amount)}</p>
                    <p className="flex items-center gap-x-1">{calender}{new Date(expense.date).toLocaleString().slice(0, 9)}</p>
                    <p className="flex items-center gap-x-1">{comment}{expense.description}</p>
                </div>
            </div>
                <div className="text-[12px]">
                    <Button 
                        icon={trash}
                        pad="py-1 px-2"
                        bRad={"50%"}
                        bg="bg-primary1"
                        color={"#fff"}
                        onClick={() => deleteExpense(expense._id)}
                    />
                </div>
        </div>
    )
}

export default ExpenseItem
