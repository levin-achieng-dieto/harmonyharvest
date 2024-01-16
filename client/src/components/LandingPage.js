import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlFood, faCircleDollarToSlot, faHandsHoldingChild } from '@fortawesome/free-solid-svg-icons'
// import linsted from "./images/linsted-cropped.jpg"
import downloadsOne from "./images/downloads 1.jpeg"
import downloadsTwo from "./images/downloads 2.jpeg"
import downloadsSeven from "./images/downloads 7.jpeg"
import downloadsFive from "./images/downloads 5.jpeg"
import "./LandingPage.css"

function LandingPage() {
    return (
        <div className="container-one">
            <div className="body">
                <div className="landing-page">
                    <div className="who-we-are">
                        <di className="section-1">
                            <h1>Helping Them Today</h1>
                            <div className="slogan">
                                <div>We Can Make</div>
                                <div>A Difference</div>
                            </div>
                            <a href="#" className="btn">Donate Today</a>
                        </di>
                        <div className="section-2">Welcome to HarmonyHarvest, where sustainable living meets modern convenience. At HarmonyHarvest, we're dedicated to providing eco-friendly solutions for a harmonious lifestyle. Explore our curated collection of ethically sourced products, ranging from organic home essentials to cutting-edge renewable energy innovations. Our mission is to empower individuals to make environmentally conscious choices without compromising on quality or style. Join us on the journey towards a greener, more sustainable future. Together, let's cultivate harmony and embrace a lifestyle that nurtures both the planet and its inhabitants. Experience the balance of nature and technology at HarmonyHarvest – where conscious living begins.</div>
                    </div>

                </div>
                <div className="card-container">
                    <div className="cards">
                        <div className="donation card-food">
                            <div className="icon"><FontAwesomeIcon icon={faBowlFood} /></div>
                            <h2>Donate Food</h2>
                            <div>By donating surplus food, you can nourish hungry children, fostering hope and smiles in their lives</div>
                        </div>
                        <div className="donation card-clothes">
                            <div className="icon"><FontAwesomeIcon icon={faHandsHoldingChild} /></div>
                            <h2>Donate Clothes/Shoes</h2>
                            <div>Transform unused clothes and shoes into blessings for our kids in the society, wrapping them in warmth and joy</div>
                        </div>
                        <div className="donation card-money">
                            <div className="icon"><FontAwesomeIcon icon={faCircleDollarToSlot} /></div>
                            <h2>Donate Money</h2>
                            <div>Empower children's dreams with a donation, transforming lives and creating brighter futures for those in need.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mission_vision">
                {/* <h2>Our Mission & Vision</h2> */}
                <div className="mission">
                    <div className="mission_statement">
                        <h1>About Us</h1>
                        <h2>Our Mission</h2>
                        <div>We envision a world where no child goes to bed hungry and where surplus resources are efficiently redirected to benefit those in need. Through our Online Charity Management System, we strive to create a seamless and user-friendly platform that empowers both tech-savvy and non-tech-savvy donors to contribute effortlessly.</div>
                        <div className="vision_button"><a href="#" className="btn">Donate Today</a></div>
                    </div>
                    <div className="mission_image">
                        <div>
                            <div className="download_seven"><img src={downloadsSeven} alt="hungry kid" /></div>
                        </div>
                    </div>
                </div>
                <div className="vision">
                    <div className="vision_images">
                        <div className="mission_images_pair_one">
                            <div className="hungry_kid download_four"><img src={downloadsOne} alt="hungry kid" /></div>
                        </div>
                        <div className="mission_images_pair_two">
                            <div className="hungry_kid download_two"><img src={downloadsTwo} alt="hungry kid" /></div>
                            <div className="hungry_kid download_one"><img src={downloadsFive} alt="hungry kid" /></div>
                        </div>
                    </div>
                    <div className="vision_statement">
                        <h1>What We Do</h1>
                        <h2>Our Vision</h2>
                        <div>To reduce food wastage and alleviate hunger, our mission is to connect surplus food from hotels and events with children's homes through an innovative Online Charity Management System. We aim to streamline the donation process by implementing real-time notifications and scheduling pick-up services for both food and physical goods.</div>
                        <div className="vision_button"><a href="#" className="btn">Donate Today</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage