import React, { useState, useEffect } from "react";
// import Card from "./Card";


function DonationList() {
    const [donation, setDonation] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/donations")
            .then((response) => response.json())
            .then((data) => {
                setDonation(data.donation);
            });
    }, []);
    return (
        <div>{donation?.map((user) => user.name)}</div>
    )
}

export default DonationList