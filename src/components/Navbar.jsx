import React, { useState } from 'react'
import { CiCircleChevRight } from "react-icons/ci";
import { Link, NavLink } from 'react-router-dom';
import logo from "../assets/logo.png";
import { HiOutlineMenu } from "react-icons/hi";
import { CgClose } from 'react-icons/cg';


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
            <nav className='flex py-3 justify-between mx-auto items-center xl:px-24 px-4'>
                <Link href="/" className='flex justify-center  text-2xl gap-2 text-black'>
                    <img src={logo} className='w-7 h-8' alt="" />
                    <span>MediJobs</span>
                </Link>
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
                {/* menu for mobile devices */}
                <div className='md:hidden'>
                    <button onClick={handleMenuToggler}>
                        {
                            isMenuOpen ? (<CgClose className='h-5 w-5 text-primary '/>) : (<HiOutlineMenu className='h-5 w-5 text-primary '/>)
                        }
                    </button>
                </div>
            </nav>
                <ul className={`md:hidden text-2xl  rounded-sm transition-all ease-in-out ${isMenuOpen ? "" : "hidden"}`} >
                {
                        navItems.map(({ path, title }) =>
                            <li key={path} className='px-4 py-5 transition-all ease-in-out w-[100vw] text-center hover:bg-slate-300'>
                                <NavLink to={path} className={({ isActive, isPending }) => { isActive ? 'active' : isPending ? 'pending' : "" }}>{title}</NavLink>
                            </li>
                        )
                    }
                </ul>
        </header>
    )
}

export default Navbar