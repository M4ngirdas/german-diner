
import { useState } from "react"
import { Link } from "react-router-dom"

import { FaShoppingCart, FaUser } from "react-icons/fa"

export default function Header() {

    const [orderDropdown, setOrderDropdown] = useState(false)

    return (
        <header className="z-50 flex items-center p-4 w-2/3 rounded-full bg-[#00221F] text-[#CDCCCD]">
                <h1 className="font-medium text-4xl">German diner</h1>
                <div className="flex justify-center gap-3 flex-1">
                    <Link to="/home">Home</Link>
                    <a href="">Contact</a>
                    <a href="">Menu</a>
                    <div className="relative">
                        <button onClick={() => setOrderDropdown(prev => !prev)} className="cursor-pointer">Order</button>
                        <ul className={`${orderDropdown ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"} grid gap-1 p-2 absolute left-1/2 top-1/2 -translate-x-1/2 mt-4 whitespace-nowrap origin-top transition-all duration-200 bg-[#CDCCCD] text-black`}>
                            <li className="cursor-pointer p-2 hover:brightness-80 hover:bg-[#CDCCCD]">For pickup</li>
                            <li className="cursor-pointer p-2 hover:brightness-80 hover:bg-[#CDCCCD]">For delivery</li>
                            <li className="cursor-pointer p-2 hover:brightness-80 hover:bg-[#CDCCCD]">Table reservation</li>
                        </ul>
                    </div>
                </div>
                <div className="flex gap-3">
                    <button className="text-lg"><FaShoppingCart /></button>
                    <button className="text-lg"><FaUser /></button>
                </div>
        </header>
    )
}