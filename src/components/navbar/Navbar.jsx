import React, { useState } from 'react'
import { useEffect } from 'react';
import './Navbar.scss'
import { Link, useLocation } from 'react-router-dom'


const Navbar = () => {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

    const { pathname } = useLocation();

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', isActive);

        return () => {
            window.removeEventListener('scroll', isActive);
        }
    }, []);

    const currentUser = {
        id: 1,
        username: "John Doe",
        isSeller: true,
    }

    return (
        <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
            <div className="container">
                <Link to={"/"} className="link">
                    <div className="logo">
                        <span className="text">fiverr</span>
                        <span className="dot">.</span>
                    </div>
                </Link>
                <div className="links">
                    <span>Fiverr Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign In</span>
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    {!currentUser && <button>Join</button>}
                    {currentUser && (
                        <div className="user" onClick={() => setOpen(!open)}>
                            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                            <span>{currentUser?.username}</span>
                            {open &&
                                (
                                    <div className="options">
                                        {
                                            currentUser?.isSeller && (
                                                <>
                                                    <Link to={"/gigs"} className="link">Gigs</Link>
                                                    <Link to={"/add"} className="link">Add New Gig</Link>
                                                </>
                                            )
                                        }
                                        <Link to={"/orders"} className="link">Orders</Link>
                                        <Link to={"/messages"} className="link">Messages</Link>
                                        <Link to={"/"} className="link">Logout</Link>
                                    </div>
                                )
                            }
                        </div>
                    )}
                </div>
            </div>
            {(active || pathname !== "/") && (<>
                <hr />
                <div className="menu">
                    <Link to={"/"} className="link menuLink">
                        Graphics & Design
                    </Link>
                    <Link to={"/"} className="link menuLink">
                        Video & Animation
                    </Link>
                    <Link to={"/"} className="link menuLink">
                        Writing & Translation
                    </Link>
                    <Link to={"/"} className="link menuLink">
                        AI Services
                    </Link>
                    <Link to={"/"} className="link menuLink">
                        Digital Marketing
                    </Link>
                    <Link to={"/"} className="link menuLink">
                        Music & Audio
                    </Link>
                    <Link to={"/"} className="link menuLink">
                        Programming & Tech
                    </Link>
                    <Link to={"/"} className="link menuLink">
                        Business
                    </Link>
                    <Link to={"/"} className="link menuLink">
                        Lifestyle
                    </Link>
                </div>
            </>)}
        </div>
    )
}

export default Navbar