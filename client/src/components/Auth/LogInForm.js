import React, { useState } from "react";
import "./LogInForm.css"

function LogIn({ onLogin }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        setIsLoading(true)
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((user) => onLogin(user));
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <div className="adminlogin">Admin Login</div>
            <div className="username">
                <label htmlFor="username">Username</label> <br></br>
                <input
                    type="text"
                    id="username"
                    autoComplete="off"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="password">
                <label htmlFor="password">Password</label> <br></br>
                <input
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div >
                <button className="submit-button" variant="fill" color="primary" type="submit">
                    {isLoading ? "Loading..." : "Login"}
                </button>
            </div>
            <div>
                {errors.map((err) => (
                    <error key={err}>{err}</error>
                ))}
            </div>
        </form>
    )
}

export default LogIn;