import React, { useContext } from 'react'
import avatar from "../img/avatar.png"
import { menuItems } from '../utils/menuItems.js'
import { signout } from '../utils/Icons.jsx'
import { ActiveContext } from '../App.jsx'

const Nav = () => {
    const {active, setActive} = useContext(ActiveContext);

    return (
        <div className='flex flex-col gap-y-8 py-8 px-6 rounded-xl border-[3px] backdrop-blur-2xl border-[#FFFFFF] bg-content'>
            <div className='flex gap-x-4 items-center'>
                <img 
                    className='w-[60px] h-[60px] rounded-full bg-white shadow-xl'
                    src={avatar} 
                    alt="avatar" />
                <h2 className='text-main font-bold'>Symon</h2>
            </div>
            
            <ul className='flex-1 '>
                {menuItems.map(item => {
                    return <li 
                        className={`relative flex my-2 pl-2 cursor-pointer font-[500] transition-all duration-300
                                    ${active === item.id ? "active text-main" : ""}`}
                        key={item.id}
                        onClick={() => setActive(item.id)}
                    >
                        <div className='w-[40px] transition-all duration-300'>{item.icon}</div>
                        <div>{item.title}</div>
                    </li>
                })}
            </ul>

            <div className='cursor-pointer font-[500]'>
                <ul><li>{signout} SignOut</li></ul>
            </div>
        </div>
    )
}

export default Nav
