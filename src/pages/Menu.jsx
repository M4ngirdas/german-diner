
import { useState } from "react"

import Header from "../components/Header.jsx"
import { MenuIcon, Plus, Search } from "lucide-react"

export default function Menu(props) {

    console.log(props.cartItems)

    const [searchValue, setSearchValue] = useState("")
    const [currentCategory, setCurrentCategory] = useState("all")

    function addToCart(item) {
        props.setCartItems(prev => {
            const cartItemDuplicate = prev.find(itemDuplicate => itemDuplicate.id === item.id)
            if (cartItemDuplicate) {
                return prev.map(itemDuplicate => itemDuplicate.id === item.id ? { ...itemDuplicate, quantity: itemDuplicate.quantity + 1 } : itemDuplicate)
            }
            else {
                return [...prev, item]
            }
        })
    }

    const menuElements = props.menuItems.map(item => (
        <li key={item.id} className={`${item.name.toLowerCase().includes(searchValue.toLowerCase()) ? "grid" : "hidden"} ${currentCategory === item.category || currentCategory === "all" ? "grid" : "hidden"} content-end relative`}>
            <h1 className="">{item.name}</h1>
            <img
                src={item.imgSrc}
                alt={item.imgAlt}
                loading="lazy"
                className="rounded-xs h-65 object-cover"
            />
            <div className="flex justify-between absolute bottom-0 p-1 w-full bg-black/60">
                <p className="flex items-center text-xl">€{item.price}</p>
                <button onClick={() => addToCart(item)} className="flex justify-center items-center gap-2 rounded-xs p-2 border border-metallic-gold bg-metallic-gold/30"><Plus /></button>
            </div>
        </li>
    ))

    return (
        <>
            <div className="flex flex-col items-center gap-6 py-6 h-full">
                <Header cartItems={props.cartItems} setCartItems={props.setCartItems} />
                <main className="flex gap-6 w-2/3 h-full text-silver">
                    <div className="grid content-start gap-6 w-full">
                        <div className="flex flex-1 rounded-xs focus-within:outline focus-within:outline-silver/70 text-silver/70 bg-evergreen-darker">
                            <span className="grid place-items-center px-3"><Search /></span>
                            <input
                                type="search"
                                placeholder="What would you like to eat?"
                                onChange={ev => setSearchValue(ev.target.value)}
                                className="p-2 w-full outline-none"
                            />
                        </div>
                        <ul className="grid grid-cols-4 gap-4">{menuElements}</ul>
                    </div>
                    <div className="grid content-start gap-4">
                        <h1 className="flex items-center gap-2 text-2xl"><MenuIcon />Categories</h1>
                        <ul className="grid gap-2">
                            <li onClick={() => setCurrentCategory("all")} className={`${currentCategory === "all" ? "bg-evergreen-darker/50" : "bg-transparent"} p-1 px-2 cursor-pointer border-r mb-4`}>All</li>
                            <li onClick={() => setCurrentCategory("mainDishes")} className={`${currentCategory === "mainDishes" ? "bg-evergreen-darker/50" : "bg-transparent"} p-1 px-2 cursor-pointer border-r`}>Main dishes</li>
                            <li onClick={() => setCurrentCategory("soups")} className={`${currentCategory === "soups" ? "bg-evergreen-darker/50" : "bg-transparent"} p-1 px-2 cursor-pointer border-r`}>Soups</li>
                            <li onClick={() => setCurrentCategory("bakery")} className={`${currentCategory === "bakery" ? "bg-evergreen-darker/50" : "bg-transparent"} p-1 px-2 cursor-pointer border-r`}>Bakery</li>
                            <li onClick={() => setCurrentCategory("dessert")} className={`${currentCategory === "dessert" ? "bg-evergreen-darker/50" : "bg-transparent"} p-1 px-2 cursor-pointer border-r`}>Dessert</li>
                            <li onClick={() => setCurrentCategory("drinks")} className={`${currentCategory === "drinks" ? "bg-evergreen-darker/50" : "bg-transparent"} p-1 px-2 cursor-pointer border-r`}>Drinks</li>
                        </ul>
                    </div>
                </main>
            </div>
        </>
    )
}