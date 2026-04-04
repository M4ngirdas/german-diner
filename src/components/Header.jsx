
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ShoppingCart, User } from "lucide-react"

import Cart from "./Cart.jsx"

export default function Header(props) {

    const [isCartOpen, setIsCartOpen] = useState(false)

    const navigate = useNavigate()
    const totalCartItems = props.cartItems.reduce((acc, item) => {
        return acc + item.quantity
    }, 0)

    return (
        <header className="flex items-center sticky top-4 p-3 z-50 w-3/4 rounded-full bg-evergreen-darker">
            <h1 className="font-medium text-4xl">German diner</h1>
            <div className="flex justify-center gap-3 flex-1">
                <div className="relative">
                    <a onClick={() => navigate("/home")} href="#start" className="peer hover:text-metallic-gold" >Home</a>
                    <div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full transition-all duration-250 opacity-0 -translate-y-full peer-hover:translate-y-0 peer-hover:opacity-100 bg-metallic-gold"></div>
                </div>
                <span className="select-none">|</span>
                <div className="relative">
                    <a onClick={() => navigate("/home")} href="#contact" className="peer hover:text-metallic-gold" >Contact</a>
                    <div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full transition-all duration-250 opacity-0 -translate-y-full peer-hover:translate-y-0 peer-hover:opacity-100 bg-metallic-gold"></div>
                </div>
                <span className="select-none">|</span>
                <div className="relative">
                    <button onClick={() => navigate("/menu")} className="peer hover:text-metallic-gold" >Menu</button>
                    <div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full transition-all duration-250 opacity-0 -translate-y-full peer-hover:translate-y-0 peer-hover:opacity-100 bg-metallic-gold"></div>
                </div>
                <span className="select-none">|</span>
                <div className="relative">
                    <button className="peer hover:text-metallic-gold" >Table reservation</button>
                    <div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full transition-all duration-250 opacity-0 -translate-y-full peer-hover:translate-y-0 peer-hover:opacity-100 bg-metallic-gold"></div>
                </div>
            </div>
            <div className="flex gap-3">
                <div className="relative">
                    <button onClick={() => setIsCartOpen(prev => !prev)} className="text-lg">{props.cartItems.length > 0 ? <span className={`${totalCartItems > 99 ? "w-5" : ""} grid place-items-center font-black absolute -top-1 -right-1 text-[11px] w-4 h-4 rounded-full bg-red-500`}>{totalCartItems}</span> : null}<ShoppingCart /></button>
                    {isCartOpen ? <Cart cartItems={props.cartItems} setCartItems={props.setCartItems} /> : null}
                </div>
                <button className="text-lg"><User /></button>
            </div>
        </header>
    )
}