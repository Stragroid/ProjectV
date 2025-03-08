import React, { useState } from 'react'
import "../css/login.css"

export default function Login() {
    const [userData, setUserData] = useState({
        email: null,
        password: null
    })
    const handleSubmit = () => {
        console.console.log("User logging in.");
    }
  return (
    <section id='login-body'>
            <div id='namedes-box'>
                <h1 id='name'>PROJECTV</h1>
                <p id='des'>Share your thoghts with the world!</p>
            </div>
            <div id='login-page'>
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit} id='login-form'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder='Enter Email' value={userData.email} onChange={(e) => setUserData((p) => {return {...p, email: e.target.value}})} required />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder='Enter Password' value={userData.password} onChange={(e) => setUserData((p) => {return {...p, password: e.target.value}})} required />
                    <button type="submit">Login</button>
                </form>
            </div>
        </section>
  );
}