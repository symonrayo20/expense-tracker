import { dollar, calender, comment, trash } from "../utils/Icons"
import Button from "./Button"
import { money, freelance, stocks, users, bitcoin, card, yt, piggy } from "../utils/Icons"
import { useGlobalContext } from "../context/GlobalContext"

const IncomeItem = ({income}) => {
    const {deleteIncome} = useGlobalContext();

    const categoryIcon = (category) =>{
        switch(category) {
            case 'Salary':
                return money;
            case 'Freelancing':
                return freelance
            case 'Investments':
                return stocks;
            case 'Stocks':
                return users;
            case 'Bitcoin':
                return bitcoin;
            case 'Bank':
                return card;
            case 'Youtube':
                return yt;
            case 'Other':
                return piggy;
            default:
                return ''
        }
    }

    return (
        <div className="flex items-center p-4 rounded-[20px] shadow-md border-2 border-white bg-[#FCF6F9] ">
            <div className="w-10 text-lg">
                {categoryIcon(income.category)}
            </div>
            <div className="flex-1 flex-col space-y-2">
                <div className="flex gap-x-4 items-center">
                    <span className="h-2 w-2 bg-green block rounded-full"></span>
                    <h5 className="font-[500] text-primary4">From {income.category}</h5>
                </div>
                <div className="flex items-center gap-x-3 ">
                    <p className="flex items-center">{dollar}{new Intl.NumberFormat().format(income.amount)}</p>
                    <p className="flex items-center gap-x-1">{calender}{new Date(income.date).toLocaleString().slice(0, 9)}</p>
                    <p className="flex items-center gap-x-1">{comment}{income.description}</p>
                </div>
            </div>
                <div className="text-[12px]">
                    <Button 
                        icon={trash}
                        pad="py-1 px-2"
                        bRad={"50%"}
                        bg="bg-primary1"
                        color={"#fff"}
                        onClick={() => deleteIncome(income._id)}
                    />
                </div>
        </div>
    )
}

export default IncomeItem
