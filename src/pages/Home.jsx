
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ChevronRight, Plus, Star } from "lucide-react"

import Header from "../components/Header.jsx"
import Contact from "../components/Contact.jsx"

import weekendSpecial from "../images/special_deals/weekend_special.png"
import pretzelDeal from "../images/special_deals/pretzel_deal.png"
import coffeeDeal from "../images/special_deals/coffee_deal.png"
import schnitzelWithSalad from "../images/menu/schnitzel_with_salad.png"

export default function Home(props) {

    const [specialDeals, setSpecialDeals] = useState(
        { weekendSpecial: true, pretzelDeal: false, coffeeDeal: false }
    )

    const navigate = useNavigate()

    return (
        <div id="start" className="grid place-items-center gap-8 pt-6">
            <Header cartItems={props.cartItems} setCartItems={props.setCartItems} menuItems={props.menuItems} setMenuItems={props.setMenuItems}/>
            <main className="grid gap-12 w-3/4">
                <section className="grid gap-8">
                    <div className="flex gap-6 w-full">
                        <aside className="flex flex-col gap-2 h-90">
                            <h2 className="text-2xl">Special deals</h2>
                            <div className="w-50 flex-1">
                                <img
                                    src={weekendSpecial}
                                    alt="Weekend special poster"
                                    className={`${specialDeals.weekendSpecial ? "block" : "hidden"} rounded-xs h-full border border-silver`}
                                />
                                <img
                                    src={pretzelDeal}
                                    alt="Pretzel deal poster"
                                    className={`${specialDeals.pretzelDeal ? "block" : "hidden"} rounded-xs h-full border border-silver`}
                                />
                                <img
                                    src={coffeeDeal}
                                    alt="Coffee deal poster"
                                    className={`${specialDeals.coffeeDeal ? "block" : "hidden"} rounded-xs h-full border border-silver`}
                                />
                            </div>
                            <div className="flex justify-center gap-2">
                                <button onClick={() => setSpecialDeals({ weekendSpecial: true, pretzelDeal: false, coffeeDeal: false })} className={`${specialDeals.weekendSpecial ? "bg-white" : "bg-silver/50"} w-2 h-2 rounded-full`}></button>
                                <button onClick={() => setSpecialDeals({ weekendSpecial: false, pretzelDeal: true, coffeeDeal: false })} className={`${specialDeals.pretzelDeal ? "bg-white" : "bg-silver/50"} w-2 h-2 rounded-full bg-silver`}></button>
                                <button onClick={() => setSpecialDeals({ weekendSpecial: false, pretzelDeal: false, coffeeDeal: true })} className={`${specialDeals.coffeeDeal ? "bg-white" : "bg-silver/50"} w-2 h-2 rounded-full bg-silver`}></button>
                            </div>
                        </aside>
                        <article className="flex flex-col gap-2 relative h-90">
                            <div>
                                <h1 className="text-3xl">German food, well made</h1>
                                <p className="text-silver/70">
                                    order for delivery or reserve a table!
                                </p>
                            </div>
                            <button onClick={() => navigate("/menu")} className="flex items-center gap-2 absolute bottom-2 right-2 rounded-xs py-2 px-4 text-lg z-20 font-medium border border-metallic-gold bg-metallic-gold/40">explore our menu<ChevronRight /></button>
                            <div className="flex overflow-hidden">
                                <img
                                    className="flex-1 object-cover rounded-xs brightness-40"
                                    src={schnitzelWithSalad}
                                    alt="Pork schnitzel with salad"
                                />
                            </div>
                        </article>
                    </div>
                    <div className="flex gap-6">
                        <article className="flex flex-1">
                            <div className="grid content-between rounded-r-xs p-4 w-full bg-evergreen-darker/50">
                                <div>
                                    <h2 className="text-2xl">Visited us already?</h2>
                                    <p className="text-silver/70">your feedback helps us improve.</p>
                                </div>
                                <button className="flex justify-center items-center gap-2 rounded-xs p-2 w-full border border-metallic-gold bg-metallic-gold/30">Leave a review <Plus /></button>
                            </div>
                            <div className="grid content-between gap-4 rounded-r-xs p-4 w-full bg-evergreen-darker">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-lg font-medium">Arthur</h3>
                                        <div className="flex gap-0.5">
                                            <Star className="size-5 fill-metallic-gold stroke-metallic-gold" />
                                            <Star className="size-5 fill-metallic-gold stroke-metallic-gold" />
                                            <Star className="size-5 fill-metallic-gold stroke-metallic-gold" />
                                            <Star className="size-5 fill-metallic-gold stroke-metallic-gold" />
                                            <Star className="size-5 fill-metallic-gold stroke-metallic-gold" />
                                        </div>
                                    </div>
                                    <p className="flex-1">the food was great, it was quick and affordable, solid spot.</p>
                                </div>
                                <div className="grid gap-2 w-full">
                                    <button className="rounded-xs p-2 bg-evergreen">See more</button>
                                </div>
                            </div>
                        </article>
                        <article className="w-1/3">
                            <h1 className="text-2xl">Our story</h1>
                            <p className="text-silver/70">we started our business in 2011 as a small bakery. 2 years later we grew into a diner and now we are offering much more - classic German dishes, drinks and the baked goods that started it all.</p>
                        </article>
                    </div>
                </section>
                <Contact />
            </main>
        </div>
    )
}