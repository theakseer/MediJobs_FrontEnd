import React, { useState } from 'react'
import { CiCircleChevRight } from "react-icons/ci";
import { Link, NavLink } from 'react-router-dom';
import logo from "../assets/logo.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const handleMenuToggler = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const navItems = [
        { path: "/", title: "Start a search" },
        { path: "/jobs", title: "Jobs" },
        { path: "/about", title: "About Us" },
        { path: "/contact", title: "Contact Us" },
        { path: "/privacy-policy", title: "Our Policy" },
    ]

    return (
        <header >
            <nav className='flex py-3 justify-between mx-auto xl:px-24 px-4'>
                <a href="/" className='flex justify-center text-2xl gap-2 text-black'>
                    <img src={logo} width={30} height={24} alt="" />
                    <span>Job Portal</span>
                </a>
                {/* Nave itesm for large devices */}
                <ul className='hidden md:flex justify-start gap-12  text-xl'>
                    {
                        navItems.map(({ path, title }) =>
                            <li key={path}>
                                <NavLink to={path} className={({ isActive, isPending }) => { isActive ? 'active' : isPending ? 'pending' : "" }}>{title}</NavLink>
                            </li>
                        )
                    }
                </ul>
                {/* signin login btns */}
                <div className='space-x-5 hidden text-base text-primary font-medium lg:flex'>
                    <Link to="/sign-up" >Sign Up</Link>
                    <Link to="/login" >Login</Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar