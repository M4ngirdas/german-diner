
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { menuData } from "../data/menu.js"

import Home from "../pages/Home.jsx"
import Menu from "../pages/Menu.jsx"

export default function App() {

    const [menuItems, setMenuItems] = useState(menuData)
    const [cartItems, setCartItems] = useState([])

    function ScrollToTop() {
        const { pathname } = useLocation()
        useEffect(() => {
            window.scrollTo(0, 0)
        }, [pathname])
        return null
    }

    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    {["/", "/home"].map((path, index) => (
                        <Route key={index} path={path} element={<Home cartItems={cartItems} setCartItems={setCartItems} />} />
                    ))
                    }
                    <Route path="/menu" element={
                        <Menu
                            cartItems={cartItems}
                            setCartItems={setCartItems}
                            menuItems={menuItems}
                            setMenuItems={setMenuItems}
                        />
                    }
                    />
                </Routes>
            </BrowserRouter>
        </>
    )
}