import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            setMenuOpen(false);
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <NavLink to="/" className="logo">
                    <span className="logo-text">Rentora</span>
                </NavLink>
                
                <div className={`mobile-menu ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                
                <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    <li><NavLink to="/" end>Home</NavLink></li>
                    <li><a href="#listing" onClick={(e) => { e.preventDefault(); scrollToSection('listing'); }}>List Property</a></li>
                    <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
                    <li><NavLink to="/explore">Explore</NavLink></li>
                    <li className="auth-links">
                        <Link to="/login" className="auth-link">Login</Link>
                        <span className="auth-divider">|</span>
                        <Link to="/signup" className="auth-link">Sign Up</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;