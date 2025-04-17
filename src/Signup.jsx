import React, { useState } from "react";
import './App.css';

import Upbar from "./components/Upbar.jsx";

function Signup() {
    const [error, setError] = useState({ name: false, email: false, skills: false }); // State for errors
    const [formData, setFormData] = useState({ name: "", email: "", skills: "" }); // State for form data

    const validate = (event) => {
        event.preventDefault();
        const { name, email, skills } = formData;
        let isValid = true;

        if (!/^[a-zA-Z\s]+$/.test(name) || name.trim() === "") {
            setError((prev) => ({ ...prev, name: true }));
            isValid = false;
        } else {
            setError((prev) => ({ ...prev, name: false }));
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError((prev) => ({ ...prev, email: true }));
            isValid = false;
        } else {
            setError((prev) => ({ ...prev, email: false }));
        }

        if (skills === "" || skills === "Choose your Skill-set") {
            setError((prev) => ({ ...prev, skills: true }));
            isValid = false;
        } else {
            setError((prev) => ({ ...prev, skills: false }));
        }

        if (isValid) {
            alert("Form submitted successfully!");
        }
    };

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    return (
        <section>
            <Upbar />
            <div>
                <div id="formdiv">
                    <form onSubmit={validate}>
                        {/* Name Input */}
                        <input
                            type="text"
                            placeholder="Aditya Sharma"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {error.name && (
                            <span className="name_error">Enter a valid name (letters only)</span>
                        )}
                        <br />

                        {/* Email Input */}
                        <input
                            id="email"
                            type="text"
                            placeholder="officialaditshrm@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {error.email && (
                            <span className="email_error">Enter a valid email address</span>
                        )}
                        <br />

                        {/* Skills Dropdown */}
                        <select
                            id="skills"
                            value={formData.skills}
                            onChange={handleChange}
                        >
                            <option value="Choose your Skill-set" disabled>
                                Choose your Skill-set
                            </option>
                            <option value="Web Development">Web Development</option>
                            <option value="Machine Learning">Machine Learning</option>
                            <option value="Generative AI">Generative AI</option>
                        </select>
                        {error.skills && (
                            <span className="skills_error">Please select a skill</span>
                        )}
                        <br />

                        <input type="submit" />
                    </form>
                    <div id="rest">
                        <a href="#">Already have an account?</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Signup;