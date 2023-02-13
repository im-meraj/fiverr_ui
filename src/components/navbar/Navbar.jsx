import React, { useState } from 'react'
import { useEffect } from 'react';
import './Navbar.scss'
// import { Link } from 'react-router-dom'

const Navbar = () => {
    const [active, setActive] = useState(false);

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', isActive);

        return () => {
            window.removeEventListener('scroll', isActive);
        }
    }, []);

    return (
        <div>
            <div className={active ? "navbar active" : "navbar"}>
                <div className="container">
                    {/* <Link to={"/"}> */}
                    <div className="logo">
                        <span className="text">fiverr</span>
                        <span className="dot">.</span>
                    </div>
                    {/* </Link> */}
                    <div className="links">
                        <span>Fiverr Business</span>
                        <span>Explore</span>
                        <span>English</span>
                        <span>Become a Seller</span>
                        <span>Sign In</span>
                        <button>Join</button>
                    </div>
                </div>
                {active && (<>
                    <hr />
                    <div className="menu">
                        <span>Test</span>
                        <span>Test 2</span>
                    </div>
                </>)}
            </div>
        </div>
    )
}

export default Navbar