
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ShoppingCart, User } from "lucide-react"

import logo from "../images/logo.png"

import Cart from "./Cart.jsx"

export default function Header(props) {

    const [isCartOpen, setIsCartOpen] = useState(false)

    const navigate = useNavigate()
    const totalCartItems = props.cartItems.reduce((acc, item) => {
        return acc + item.quantity
    }, 0)

    return (
        <header className="flex justify-center transition-colors duration-300 w-full fixed top-0 py-6 z-50 shadow-lg bg-evergreen-darker">
            <div className="flex justify-between items-center w-[80%]">
                <div className="flex items-center gap-18">
                    <img
                        src={logo}
                        alt="Bavaria lounge logo"
                        className="w-35"
                    />
                    <div className="flex gap-3">
                        <a onClick={() => navigate("/home")} href="#start" className="peer hover:text-metallic-gold" >Home</a>
                        <a href="#reservation" className="peer hover:text-metallic-gold" >Reservation</a>
                        <a onClick={() => navigate("/home")} href="#contact" className="peer hover:text-metallic-gold" >Contact</a>
                        <span className="select-none">|</span>
                        <button onClick={() => navigate("/menu")} className="peer hover:text-metallic-gold" >Menu</button>
                    </div>
                </div>
                <div className="flex gap-8">
                    <div className="relative">
                        <button onClick={() => setIsCartOpen(prev => !prev)} className="text-lg" className="flex items-center gap-2 text-lg rounded-sm hover:text-metallic-gold">
                            <span className="relative">
                                {props.cartItems.length > 0 ? <span className={`${totalCartItems > 99 ? "w-5" : ""} grid place-items-center gap-2 font-black absolute text-[11px] -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white`}>{totalCartItems}</span> : null}
                                <ShoppingCart />
                            </span>
                            <span className="flex items-center gap-2">Cart</span>
                        </button>
                        {isCartOpen ? <Cart cartItems={props.cartItems} setCartItems={props.setCartItems} /> : null}
                    </div>
                    <button className="flex items-center gap-2 text-lgrounded-sm hover:text-metallic-gold"><User />Register</button>
                </div>
            </div>
        </header>
    )
}