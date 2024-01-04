import React from 'react';

const UserNavBar = () => {
    return (
        <div style={navbarStyle}>
            <img src="ngo-logo.png" alt="NGO Logo" style={logoStyle} />
            <div style={tabsContainerStyle}>
                <div style={tabStyle}>Home</div>
                <div style={tabStyle}>About Us</div>
                <div style={tabStyle}>Projects</div>
                <div style={tabStyle}>Get Involved</div>
                <div style={tabStyle}>Contact Us</div>
            </div>
        </div>
    );
};

// Styles
const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#4CAF50', // Green color, you can change it
    color: '#fff',
};

const logoStyle = {
    width: '50px', // Adjust the width as needed
    height: '50px', // Adjust the height as needed
};

const tabsContainerStyle = {
    display: 'flex',
};

const tabStyle = {
    padding: '10px',
    margin: '0 10px',
    cursor: 'pointer',
    borderBottom: '2px solid transparent',
    transition: 'border-bottom 0.3s ease-in-out',
};

export default UserNavBar;
