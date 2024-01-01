import { dollar } from '../utils/Icons';
import { useGlobalContext } from '../context/GlobalContext'
import { currencyFormat } from '../utils/currencyFormat';
import History from "./History";
import { useEffect } from 'react';

const Dashboard = () => {
    const {incomes, expenses, getIncomes, getExpenses, totalIncome, totalExpense} = useGlobalContext();

    useEffect(() => {
        getIncomes();
        getExpenses();
    }, [])

    return (
        <div className='flex flex-col gap-y-4'>
            <h1 className="text-lg font-[500] text-primary4">Dashboard</h1>

            <div className='flex justify-between w-full font-[500]'>
                <div className='p-4 rounded-xl shadow border-2 border-white bg-[#FCF6F9]'>
                    <h2 className='text-primary4'>Total Balance</h2>
                    <p className='text-green'>{dollar}{currencyFormat(totalExpense()-totalIncome())}</p>
                </div>
                <div className='p-4 rounded-xl shadow border-2 border-white bg-[#FCF6F9]'>
                    <h2 className='text-primary4'>Total Income</h2>
                    <p>+{dollar}{currencyFormat(totalIncome())}</p>
                </div>
                <div className='p-4 rounded-xl shadow border-2 border-white bg-[#FCF6F9]'>
                    <h2 className='text-primary4'>Total Expense</h2>
                    <p>-{dollar}{currencyFormat(totalExpense())}</p>
                </div>
            </div>

            <History />
            <div>
                <div className='flex justify-between items-center font-[500] mb-1'>
                    <p>Min</p>
                    <h1 className='text-lg'>Income</h1>
                    <p>Max</p>
                </div>
                <div className='flex justify-between rounded-lg shadow p-2 border-2 border-white bg-[#FCF6F9]'>
                    <p>{dollar}{currencyFormat(Math.min(...incomes.map(item => item.amount)))}</p>
                    <p>{dollar}{currencyFormat(Math.max(...incomes.map(item => item.amount)))}</p>
                </div>
            </div>
            <div>
                <div className='flex justify-between items-center font-[500] mb-1'>
                    <p>Min</p>
                    <h1 className='text-lg'>Expense</h1>
                    <p>Max</p>
                </div>
                <div className='flex justify-between rounded-lg shadow p-2 border-2 border-white bg-[#FCF6F9]'>
                    <p>{dollar}{currencyFormat(Math.min(...expenses.map(item => item.amount)))}</p>
                    <p>{dollar}{currencyFormat(Math.max(...expenses.map(item => item.amount)))}</p>
                </div>
            </div>

        </div>
    )
}

export default Dashboard
