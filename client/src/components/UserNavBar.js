import React from 'react';
import "./UserNavbar.css"
import { useNavigate } from 'react-router-dom';

const UserNavBar = () => {

    let navigate = useNavigate()
    {/* <a href="#" className="btn" onClick={() => {
                                navigate("/donations")
                            }} > Donate Today</a> */}
    return (
        <>
            <div className='header'>
                <div className='header_content'>
                    <div className="logo">
                        <div className='harmony'>HarmonyHarvest</div>
                        <div className='harmonyharvest'>bridging surplus to need</div>
                    </div>
                    <nav className="nav">
                        <ul className='nav_list'>
                            <li className='nav_item'>
                                <a href="#" className="nav_link" onClick={() => {
                                    navigate("/")
                                }}>Home</a>
                            </li>
                            <li className='nav_item'>
                                <a href="#" className="nav_link" >About Us</a>
                            </li>
                            <li className='nav_item'>
                                <a href="#" className="nav_link">Projects</a>
                            </li>
                            <li className='nav_item'>
                                <a href="#" className="nav_link">Get Involved</a>
                            </li>
                            <li className='nav_item'>
                                <a href="#" className="btn">AdminLogin</a>
                            </li>
                        </ul>
                    </nav>

                </div>
            </div>
        </>
    );
};

export default UserNavBar;
