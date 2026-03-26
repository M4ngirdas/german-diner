
import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { ShoppingCart, User } from "lucide-react"

export default function Header() {

    const [orderDropdown, setOrderDropdown] = useState(false)

    const navigate = useNavigate()
    const { pathname } = useLocation()

    return (
        <header className="flex items-center z-50 p-4 w-2/3 rounded-full bg-evergreen-darker text-silver">
            <h1 className="font-medium text-4xl">German diner</h1>
            <div className="flex justify-center gap-3 flex-1">
                <a onClick={() => navigate("/home")} className={pathname === "/home" || pathname === "/" ? "border-b border-metallic-gold" : ""}>Home</a>
                <a>Contact</a>
                <a onClick={() => navigate("/menu")} className={pathname === "/menu" ? "border-b border-metallic-gold" : ""}>Menu</a>
                <div className="relative">
                    <button onClick={() => setOrderDropdown(prev => !prev)}>Order</button>
                    <ul className={`${orderDropdown ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"} grid gap-1 p-2 absolute left-1/2 top-1/2 -translate-x-1/2 mt-4 whitespace-nowrap origin-top transition-all duration-200 bg-silver text-black`}>
                        <li className="cursor-pointer p-2 hover:brightness-80 hover:bg-silver">For delivery</li>
                        <li className="cursor-pointer p-2 hover:brightness-80 hover:bg-silver">Table reservation</li>
                    </ul>
                </div>
            </div>
            <div className="flex gap-3">
                <button className="text-lg"><ShoppingCart /></button>
                <button className="text-lg"><User /></button>
            </div>
        </header>
    )
}