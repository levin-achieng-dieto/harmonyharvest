import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DonationList from './DonationList';
import Donations from './Donations';
import axios from 'axios';


const api = "http://localhost:3000/donations";

function Navbar({ user, setUser }) {
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((response) => {
            if (response.ok) {
                setUser(null);
            }
        })
    }

    const [donation, setDonation] = useState([]);

    useEffect(() => {
        loadDonations();
    }, []);

    const loadDonations = async () => {
        const response = await axios.get(api);
        console.log(response);
        setDonation(response.data);
    };

    return (
        <>
            <logo>
                <Link to="/"></Link>
            </logo>
            <nav>
                <button>Home</button>
                <button>Contact</button>
                <button onClick={handleLogoutClick}>
                    Logout
                </button>
            </nav>
            <Donations donations={donation} loadDonations={loadDonations} />
            <DonationList />
        </>
    )
}
export default Navbar;