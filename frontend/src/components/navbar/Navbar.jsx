import "./navbar.css"
import { useState, useEffect } from "react";
const Navbar = () => {
    const [isActive, setActive] = useState(false);

    const handleClick = () => {
        setActive(!isActive);
    }
    return (

        <div className="navContainer">
            <h1 className="logo">LH<span >Lien Hung</span></h1>

            <div className="navbar">
                <input type="checkbox" id="toggler" />
                <label for="toggler" class={isActive ? "active navMenu" : "navMenu"} onClick={handleClick}>
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                </label>
                <div className="menu">
                    <ul className="list">
                        <li><a href="#">Home</a></li>
                        <li><a href="/booking">Booking</a></li>
                        <li><a href="#">Price</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>



    )
}

export default Navbar