
import { useNavigate } from "react-router-dom"
import { ChevronDown, ChevronRight, ChevronUp, ShoppingCart, X } from "lucide-react"

export default function Cart(props) {

    const navigate = useNavigate()
    const cartItemsPriceArray = props.cartItems.map(item => (item.price * item.quantity))
    let total = 0

    for (const item of cartItemsPriceArray) {
        total += item
    }

    function removeFromCart(id) {
        props.setCartItems(prev => prev.filter(item => id !== item.id))
    }

    function quantityAdd(id) {
        props.setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    }

    function quantitySubtract(id) {
        props.setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
    }

    const cartElements = props.cartItems.map(item => (
        <li key={item.id} className="flex justify-between items-center gap-2 flex-1 rounded-xs relative p-2 border border-silver/30 bg-evergreen-darker">
            <img className="absolute inset-0 rounded-xs w-full h-full object-cover opacity-25 z-1" src={item.imgSrc} alt={item.imgAlt} />
            <div className="flex gap-2 flex-1 z-10 text-base">
                <div className="grid place-items-center rounded-full backdrop-blur-sm bg-silver/20">
                    <button
                        disabled={item.quantity === 10}
                        onClick={() => quantityAdd(item.id)}
                        className="disabled:cursor-no-drop disabled:text-silver/30"
                    ><ChevronUp />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                        disabled={item.quantity === 1}
                        onClick={() => quantitySubtract(item.id)}
                        className="disabled:cursor-no-drop disabled:text-silver/30"
                    ><ChevronDown />
                    </button>
                </div>
                <div>
                    <h3 className="flex gap-2 font-semibold"><span>{item.name}</span></h3>
                    <p className="flex gap-2">€{item.price * item.quantity}</p>
                </div>
            </div>
            <button onClick={() => removeFromCart(item.id)} className="grid place-items-center z-10 w-7 h-7 transition-all duration-300 ease-out hover:backdrop-blur-sm hover:bg-silver/20"><X /></button>
        </li>
    ))

    return (
        <div className="grid gap-4 w-sm rounded-xl absolute left-1/2 -translate-x-1/2 p-4 border border-silver/30 bg-evergreen-darker">
            <h2 className="flex items-center gap-2 text-2xl"><ShoppingCart />SHOPPING CART</h2>
            <div className="grid gap-2">
                {props.cartItems.length === 0 ? <p>your shopping cart is empty!<br /> <a onClick={() => navigate("/menu")} className="underline text-metallic-gold">explore our menu</a></p> : null}
                <ul className={`${props.cartItems.length > 3 ? "w-full h-90 overflow-y-scroll pr-2" : ""} flex flex-col gap-2`}>{cartElements}</ul>
                {props.cartItems.length !== 0 ? <p className="text-lg">Total: €{total}</p> : null}
                {props.cartItems.length !== 0 ? <button className="flex justify-between items-center gap-2 rounded-xs py-2 px-4 border border-metallic-gold bg-metallic-gold/40">Continue to payment <ChevronRight /></button> : null}
            </div>
        </div>
    )
}