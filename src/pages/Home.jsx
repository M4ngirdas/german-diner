
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ChevronDown, ChevronRight, Plus, Star } from "lucide-react"

import Header from "../components/Header.jsx"
import Contact from "../components/Contact.jsx"

import weekendSpecial from "../images/special_deals/weekend_special.png"
import pretzelDeal from "../images/special_deals/pretzel_deal.png"
import coffeeDeal from "../images/special_deals/coffee_deal.png"
import hero from "../images/hero.png"

export default function Home(props) {

    const [specialDeals, setSpecialDeals] = useState(
        { weekendSpecial: true, pretzelDeal: false, coffeeDeal: false }
    )

    const navigate = useNavigate()

    return (
        <div id="start" className="grid">
            <main className="grid place-items-center gap-12">
                <Header cartItems={props.cartItems} setCartItems={props.setCartItems} menuItems={props.menuItems} setMenuItems={props.setMenuItems} />
                <section className="flex gap-6 mt-24 py-16 w-[80%]">
                    <article className="flex flex-col gap-4 w-full relative">
                        <div className="grid gap-2">
                            <h1 className="font-semibold text-5xl">German dishes, the way you remember</h1>
                            <p className="text-silver/70 text-lg">
                                Order for delivery or reserve a table!
                            </p>
                            <div className="flex gap-4 py-5">
                                <a href="#reservation" className="group flex justify-between items-center gap-6 rounded-sm px-6 py-4 font-medium tracking-wider transition-normal duration-200 hover:brightness-120 bg-pine-teal/50 text-silver"><ChevronDown className="transition-transform duration-500 group-hover:rotate-360" />RESERVE A TABLE</a>
                                <button onClick={() => navigate("/menu")} className="group flex justify-between items-center gap-6 rounded-sm px-6 py-4 font-medium tracking-wider transition-normal duration-200 hover:brightness-120 border-0 border-evergreen border-b border-metallic-gold bg-metallic-gold/20 text-metallic-gold">EXPLORE OUR MENU<ChevronRight className="text-metallic-gold transition-transform duration-500 group-hover:rotate-360" /></button>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="grid gap-4 w-full">
                                <img
                                    className="h-90 w-full object-cover rounded-sm brightness-90"
                                    src={hero}
                                    alt="Pork schnitzel with salad"
                                />
                            </div>
                            {/* <aside className="grid gap-4 w-1/4">
                                    <div className="flex flex-col gap-2">
                                        <div className="h-90 brightness-90">
                                            <img
                                                src={weekendSpecial}
                                                alt="Weekend special poster"
                                                className={`${specialDeals.weekendSpecial ? "block" : "hidden"} rounded-sm h-full`}
                                            />
                                            <img
                                                src={pretzelDeal}
                                                alt="Pretzel deal poster"
                                                className={`${specialDeals.pretzelDeal ? "block" : "hidden"} rounded-sm h-full`}
                                            />
                                            <img
                                                src={coffeeDeal}
                                                alt="Coffee deal poster"
                                                className={`${specialDeals.coffeeDeal ? "block" : "hidden"} rounded-sm h-full`}
                                            />
                                        </div>
                                        <div className="flex justify-center gap-2">
                                            <button onClick={() => setSpecialDeals({ weekendSpecial: true, pretzelDeal: false, coffeeDeal: false })} className={`${specialDeals.weekendSpecial ? "bg-white" : "bg-silver/50"} w-2 h-2 rounded-full`}></button>
                                            <button onClick={() => setSpecialDeals({ weekendSpecial: false, pretzelDeal: true, coffeeDeal: false })} className={`${specialDeals.pretzelDeal ? "bg-white" : "bg-silver/50"} w-2 h-2 rounded-full bg-silver`}></button>
                                            <button onClick={() => setSpecialDeals({ weekendSpecial: false, pretzelDeal: false, coffeeDeal: true })} className={`${specialDeals.coffeeDeal ? "bg-white" : "bg-silver/50"} w-2 h-2 rounded-full bg-silver`}></button>
                                        </div>
                                    </div>
                                </aside> */}
                        </div>
                    </article>
                </section>
                <Contact />
            </main>
        </div>
    )
}