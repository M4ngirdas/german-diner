
import { useState } from "react"
import { FaAngleRight, FaForumbee, FaPlus, FaStar } from "react-icons/fa"

import Header from "../components/Header.jsx"

import weekendspecial from "../assets/weekendspecial.png"
import pretzeldeal from "../assets/pretzeldeal.png"
import coffeedeal from "../assets/coffeedeal.png"
import schnitzel from "../assets/schnitzel.png"

export default function Home() {

    const [specialDeals, setSpecialDeals] = useState({ weekendSpecial: true, pretzelDeal: false, coffeeDeal: false })

    return (
        <div className="flex flex-col items-center gap-6 py-6 h-full">
            <Header />
            <main className="grid place-items-center gap-6 h-full w-2/3 text-[#cdcccd]">
                <section className="flex flex-col gap-6 relative w-full h-full">
                    <div className="flex gap-6 flex-1 w-full">
                        <aside className="flex flex-col gap-2 h-85">
                            <h2 className="text-2xl">Special deals</h2>
                            <div className="w-50">
                                <img className={`${specialDeals.weekendSpecial ? "block" : "hidden"} rounded-sm object-contain border`} src={weekendspecial} alt="Weekend special poster" />
                                <img className={`${specialDeals.pretzelDeal ? "block" : "hidden"} rounded-sm object-contain border`} src={pretzeldeal} alt="Pretzel deal poster" />
                                <img className={`${specialDeals.coffeeDeal ? "block" : "hidden"} rounded-sm object-contain border`} src={coffeedeal} alt="Coffee deal poster" />
                            </div>
                            <div className="flex justify-center gap-2">
                                <button onClick={() => setSpecialDeals({ weekendSpecial: true, pretzelDeal: false, coffeeDeal: false })} className={`${specialDeals.weekendSpecial ? "bg-white" : "bg-[#CDCCCD]/50"} w-2 h-2 rounded-full`}></button>
                                <button onClick={() => setSpecialDeals({ weekendSpecial: false, pretzelDeal: true, coffeeDeal: false })} className={`${specialDeals.pretzelDeal ? "bg-white" : "bg-[#CDCCCD]/50"} w-2 h-2 rounded-full bg-[#CDCCCD]`}></button>
                                <button onClick={() => setSpecialDeals({ weekendSpecial: false, pretzelDeal: false, coffeeDeal: true })} className={`${specialDeals.coffeeDeal ? "bg-white" : "bg-[#CDCCCD]/50"} w-2 h-2 rounded-full bg-[#CDCCCD]`}></button>
                            </div>
                        </aside>
                        <article className="flex flex-col gap-2 relative h-80.5">
                            <div>
                                <h1 className="text-3xl">German food, well made</h1>
                                <p className="text-[#CDCCCD]/70">
                                    order for pickup, delivery or even reserve a table!
                                </p>
                            </div>
                            <button className="flex items-center gap-2 absolute bottom-2 right-2 rounded-xs py-2 px-4 text-lg z-50 font-medium border border-[#F2A64D] bg-[#F2A64D]/40 text-[#CDCCCD]">explore our menu<FaAngleRight /></button>
                            <div className="flex overflow-hidden">
                                <img className="flex-1 object-cover rounded-xs brightness-40" src={schnitzel} alt="Schnitzel with vegetables" />
                            </div>
                        </article>
                    </div>
                    <div className="flex gap-6 h-full">
                        <article className="flex flex-1">
                            <div className="grid content-between rounded-r-xs p-4 w-full bg-[#00221F]/50">
                                <div>
                                    <h2 className="text-2xl">Visited us already?</h2>
                                    <p className="text-[#CDCCCD]/70">your feedback helps us improve.</p>
                                </div>
                                <button className="flex justify-center items-center gap-2 rounded-xs p-2 w-full border border-[#F2A64D] bg-[#F2A64D]/30">Leave a review <FaPlus /></button>
                            </div>
                            <div className="grid content-between rounded-r-xs p-4 w-full bg-[#00221F]">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-lg font-medium">Arthur</h3>
                                        <div className="flex gap-0.5">
                                            <span className="text-[#F2A64D]"><FaStar /></span>
                                            <span className="text-[#F2A64D]"><FaStar /></span>
                                            <span className="text-[#F2A64D]"><FaStar /></span>
                                            <span className="text-[#F2A64D]"><FaStar /></span>
                                            <span className="text-[#F2A64D]"><FaStar /></span>
                                        </div>
                                    </div>
                                    <p className="flex-1">the food was great, it was quick and affordable, solid spot.</p>
                                </div>
                                <div className="grid gap-2 w-full">
                                    <button className="rounded-xs p-2 bg-[#003B31]">See more</button>
                                </div>
                            </div>
                        </article>
                        <article className="w-1/3">
                            <h1 className="text-2xl">Our story</h1>
                            <p className="text-[#CDCCCD]/70">we started our business in 2011 as a small bakery. 2 years later we grew into a diner and now we are offering much more - classic German dishes, drinks and the baked goods that started it all.</p>
                        </article>
                    </div>
                </section>
            </main>
        </div>
    )
}