import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlFood, faCircleDollarToSlot, faHandsHoldingChild } from '@fortawesome/free-solid-svg-icons'


function Donations() {
    return (
        <div>
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
    )
}

export default Donations