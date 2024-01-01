import { useContext } from "react"
import { ActiveContext } from "../App"
import Dashboard from "./Dashboard";
import Income from "./Income";
import Expense from "./Expense";

const MainContent = () => {
    const {active, setActive} = useContext(ActiveContext);

    const displayData = (active) => {
        switch(active) {
            case 1: 
                return <Dashboard />
            case 2:
                return <Income />
            case 3:
                return <Expense />
            default: 
                return <Dashboard />
        }
    }

    return (
        <div className="w-full max-w-[700px] py-8 px-6 rounded-[32px] overflow-auto overflow-x-hidden backdrop-blur-[4.5px] border-[3px] border-white bg-content">
            {displayData(active)}
        </div>
    )
}

export default MainContent
