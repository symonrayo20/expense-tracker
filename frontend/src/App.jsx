import React from "react";
import { useState } from "react"
import Nav from "./components/Nav"
import MainContent from "./components/MainContent";
import { useGlobalContext } from "./context/GlobalContext";
import AddIncome from "./components/AddIncome";
import AddExpense from "./components/AddExpense";

export const ActiveContext = React.createContext();

function App() {
    const [active, setActive] = useState(1);
    const {showAddIncome, setShowAddIncome, showAddExpense, setShowAddExpense} = useGlobalContext();

    return (
        <div className="font-roboto text-clamp h-[100svh] bg-home text-primary2 relative">
            <ActiveContext.Provider value={{ active, setActive }}>
                <main className="flex justify-center h-[100%] p-4 gap-2">
                    <Nav />
                    <MainContent />
                </main>
                {showAddIncome && <AddIncome close={() => setShowAddIncome(false)} />}
                {showAddExpense && <AddExpense close={() => setShowAddExpense(false)} />}
            </ActiveContext.Provider>
        </div>
    )
}

export default App
