
import { useState } from "react"
import { ChevronDown, ChevronRight, Plus, Star } from "lucide-react"

import Header from "../components/Header.jsx"
import Start from "../components/sections/Start.jsx"
import Reservation from "../components/sections/Reservation.jsx"
import Contact from "../components/sections/Contact.jsx"

import weekendSpecial from "../images/special_deals/weekend_special.png"
import pretzelDeal from "../images/special_deals/pretzel_deal.png"
import coffeeDeal from "../images/special_deals/coffee_deal.png"

export default function Home(props) {

    return (
        <div id="start">
            <main className="grid place-items-center">
                <Header cartItems={props.cartItems} setCartItems={props.setCartItems} />
                <Start />
                <Reservation />
                <Contact />
            </main>
        </div>
    )
}