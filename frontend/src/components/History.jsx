import { useGlobalContext } from '../context/GlobalContext'
import { currencyFormat } from '../utils/currencyFormat';

const history = () => {
    const {transactionHistory} = useGlobalContext();

    const [...history] = transactionHistory();

    return (
        <div className='flex flex-col gap-y-1'>
            <h1 className="text-lg font-[500] text-primary4">Recent History</h1>
            {history.map(item => {
                return (
                    <div 
                        key={item._id}
                        className={`px-2 py-2 flex justify-between rounded-lg shadow border-2 border-white bg-[#FCF6F9]
                                ${item.type === "income" ? "text-green" : "text-delete"}`}
                    >
                        {item.category}
                        <div>
                            {item.type === "income" ? "+" : "-"}
                            {currencyFormat(item.amount)}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default history
