
import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { menuItemsData } from "./data.js"

import Home from "./pages/Home.jsx"
import Menu from "./pages/Menu.jsx"

export default function App() {

    const [menuItems, setMenuItems] = useState(menuItemsData)
    const [cartItems, setCartItems] = useState([])

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/home" element={<Home cartItems={cartItems} setCartItems={setCartItems} />} />
                    <Route path="/menu" element={<Menu cartItems={cartItems} setCartItems={setCartItems} menuItems={menuItems} setMenuItems={setMenuItems} />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}