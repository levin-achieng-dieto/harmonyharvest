import React, { useState } from "react";
import LogInForm from "./Auth/LogInForm";
// import SignUpForm from "./Auth/SignUpForm";
import UserNavBar from "./UserNavBar"
import LandingPage from "./LandingPage";
import Donations from "./Donations";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelopeOpen, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import "./Pages.css"
import { Link, Route, Routes } from "react-router-dom"
// import Donations from "./Donations";

// import FoodDonationForm from "./FoodDonationForm";



function Pages({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true)

    return (
        <>
            <UserNavBar />
            {/* <Donations /> */}
            {/* <FoodDonationForm /> */}
            {/* <Link to="/">home</Link> */}
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/donations" element={<Donations />} />
            </Routes>
            <div>
                {/* <UserNavBar />
                <LandingPage /> */}
                {/* <Donations /> */}
            </div>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-columns admin-login-form">
                        <div>
                            {showLogin ? (
                                <>
                                    <LogInForm onLogin={onLogin} />
                                    {/* <p>
                            Don't have an account? &nbsp;
                            <button color="secondary" onClick={() => setShowLogin(false)}>
                                Sign Up
                            </button>
                        </p> */}
                                </>
                            ) : (
                                <>
                                    {/* <SignUpForm onLogin={onLogin} />
                        <p>
                            Already have an account? &nbsp;
                            <button color="secondary" onClick={() => setShowLogin(true)}>
                                Log In
                            </button>
                        </p> */}
                                </>
                            )}
                        </div>
                    </div>
                    <div className="footer-columns">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-columns">
                        <h2>Contact Info</h2>
                        <div className='contacts'>
                            <div className="icon"><FontAwesomeIcon icon={faPhone} /></div>
                            <div className="connect-with-us">
                                <h3>Phone Number</h3>
                                <h5>+254700990088</h5>
                            </div>
                        </div>
                        <div className="contacts">
                            <div className="icon"><FontAwesomeIcon icon={faEnvelopeOpen} /></div>
                            <div className="connect-with-us">
                                <h3>Email Address</h3>
                                <h5>harmonyharvest@gmail.com</h5>
                            </div>
                        </div>
                        <div className="contacts">
                            <div className="icon"><FontAwesomeIcon icon={faLocationDot} /></div>
                            <div className="connect-with-us">
                                <h3>Address</h3>
                                <h5>Moyo children centre thika</h5>
                            </div>
                        </div>
                        {/* <p>Email: contact@example.com</p>
                        <p>Phone: +1 (123) 456-7890</p> */}
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Your Website. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}


export default Pages;