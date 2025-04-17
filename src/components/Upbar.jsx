import './Upbar.css'
import Logo from "./logo.png"
import React, { useRef, useState } from "react"

function Header () {

    const [services, setServices] = useState(false)
    const [navv, setNav] = useState(false)


    const handleServices = () => {
        setServices(!services)
    }

    const handleNav = (event) => {
        setNav(!navv)
        if (services === true) {
            setServices(false)
        }
    }



    return <section>
        <div id = "header">
            <div id = "logo">
                <img src = { Logo } height = "150px" alt = "Logo"/>
            </div>
            <div id = "navbar">
                <div className={`ham-menu ${navv ? "active" : ""}`} onClick = { handleNav }>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                    {navv && (
                        <div id = "nav">
                            <a href = "/">Home</a>
                            <a href = "/signup">Signup</a>
                            <div id = "servicediv" onClick = { handleServices }>Services</div>
                            { services && (
                                <div id = "servicelist" >
                                    <a href = "#">Service 1</a>
                                    <a href = "#">Service 2</a>
                                    <a href = "#">Service 3</a>
                                    <a href = "#">Service 4</a>
                                </div>
                            )}
                            <a href = "#">Contact</a>
                        </div>
                    )}
                
            </div>
        </div>
    </section>
}

export default Header