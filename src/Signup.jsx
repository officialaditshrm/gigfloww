import React, { useState } from "react"
import './App.css'

import Header from "./components/Upbar.jsx"
function Signup () {
    const [error, setError] = useState(false)

    const validate = (event) => {
        event.preventDefault()
        let name = document.getElementById("nameinput").value.trim()
        setError(false)
        var i = 0
        while (i < name.length) {
            if (parseInt(name.charAt(i)) < 10) {
                setError(true)
                break
            }
            i++
        }
    }

    

    return (<section>
        <Header />
        <div>

        </div>
        <div>
            <form onSubmit = { validate }>
                <input type = "text" placeholder = "Aditya Sharma" id = "nameinput"/>
                {error && (
                    <span className= "name_error">Enter valid name</span>
                    )
                }<br/>
                <input type = "email" placeholder = "officialaditshrm@gmail.com" /><br />
                <select>
                    <option selected disabled>Choose your Skill-set</option>
                    <option >Web Development</option>
                    <option>Machine Learning</option>
                    <option>Generative AI</option>
                </select>
                <br />
                <input type = "submit" />
            </form>
        </div>
    </section>
    )
}

export default Signup