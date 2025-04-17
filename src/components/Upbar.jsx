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
                            <ul id = "navlist">
                                <li><a href = "/">Home</a></li>
                                <li><a href = "/signup">Signup</a></li>
                                <li onMouseEnter = { handleServices } onMouseLeave = { handleServices }><a>Services</a>
                                { services && (
                                    <ul id = "services" >
                                        <li><a href = "#">Service 1</a></li>
                                        <li><a href = "#">Service 1</a></li>
                                        <li><a href = "#">Service 1</a></li>
                                        <li><a href = "#">Service 1</a></li>
                                    </ul>
                                )}
                                </li>
                                <li><a href = "#">Contact</a></li>
                            </ul>
                        </nav>
                    )}
                
            </div>
        </div>
    </section>
}

export default Header