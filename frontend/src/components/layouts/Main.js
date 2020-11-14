import React from "react"
import Footer from "../partials/Footer/Footer"
import Navbar from "../partials/Navbar/Navbar"

export default function MainLayout({ children }) {
    return (
        <div className="w-100">
            <Navbar />
            <div className="w-100">{children}</div>
            <Footer />
        </div>
    )

}