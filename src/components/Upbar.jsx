import './Upbar.css'
import Logo from "./logo.png"
import React, { useState } from "react"

function Header () {

    const [services, setServices] = useState(false)
    const [navv, setNav] = useState(false)

    const handleServices = () => {
        setServices(!services)
    }

    const handleNav = (event) => {
        setNav(!navv)
    }

    return <section>
        <div id = "header">
            <div id = "logo">
                <img src = { Logo } height = "100px" alt = "Logo"/>
            </div>
            <div id = "navbar">
                <button id="navopen" onClick = { handleNav }>Nav</button>
                
                    {navv && (
                        <nav id = "nav">
                            <a href = "/">Home</a>
                            <a href = "/signup">Signup</a>
                            <div id = "servicediv" onClick = { handleServices }>Services</div>
                            { services && (
                                <div id = "servicelist" >
                                    <a href = "#">Service 1</a>
                                    <a href = "#">Service 1</a>
                                    <a href = "#">Service 1</a>
                                    <a href = "#">Service 1</a>
                                </div>
                            )}
                            <a href = "#">Contact</a>
                        </nav>
                    )}
                
            </div>
        </div>
    </section>
}

export default Header