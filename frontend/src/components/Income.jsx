import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext"
import IncomeItem from "./IncomeItem";
import Button from "./Button";
import { plus } from "../utils/Icons";

const Income = () => {
    const {incomes, getIncomes, totalIncome} = useGlobalContext();
    const {setShowAddIncome} = useGlobalContext();

    useEffect(() => {
        getIncomes();
    }, [])

    return (
        <div className="flex flex-col gap-y-4">
            <div className="flex justify-between">
                <h1 className="text-lg text-primary4 font-[500]">My Incomes</h1>
                <Button 
                    text="Add Income" 
                    color="white"
                    bg="bg-accent"
                    pad="px-3 py-1.5"
                    icon={plus}
                    bRad="30px"
                    onClick={() => setShowAddIncome(true)}
                    />
            </div>
            <div className="text-center text-sm font-[500] rounded-xl p-2 shadow-md border-2 border-white bg-[#FCF6F9] text-primary4">
                Total income: <span className="text-green">${new Intl.NumberFormat().format(totalIncome())}</span>
            </div>
            <div className="flex-1 flex flex-col gap-y-2 text-xs"> 
                {incomes.map(income => {
                    return <IncomeItem key={income._id} income={income} />
                })}
            </div>
        </div>
    )
}

export default Income
