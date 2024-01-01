
const Button = ({text, icon, onClick, pad="px-2 py-1", bg, color, bRad}) => {
    return (
        <button 
            className={`${bg} ${pad} outline-none border-none flex items-center justify-center
                        gap-x-2 cursor-pointer transition-all duration-300 ease-in-out active:scale-95`}
            style={{ 
                borderRadius: bRad,
                color: color
             }}
             onClick={onClick}
        >
            <span>{icon}</span>
            {text}
        </button>
    )
}

export default Button
