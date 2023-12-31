import React from "react";
import { useState } from "react"
import Nav from "./components/Nav"

export const ActiveContext = React.createContext();

function App() {
    const [active, setActive] = useState(1);

    return (
        <div className="font-roboto text-clamp h-[100svh] bg-home text-primary2 relative">
            {/* <div className="absolute h-[70vh] w-[70vw] ml-[-37vw] mt-[-37vh] text-delete bg-orb blur-[100px] ">
                ds
            </div> */}
            <ActiveContext.Provider value={{ active, setActive }}>
                <main className="flex h-[100%] p-8 gap-8">
                    <Nav />
                </main>
            </ActiveContext.Provider>
        </div>
    )
}

export default App
