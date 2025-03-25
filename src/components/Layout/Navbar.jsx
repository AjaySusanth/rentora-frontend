import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import './navbar.css';
import { supabase } from '../../utils/supabaseClient.js';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Fetch authenticated user
    useEffect(() => {
        const fetchUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
        };

        fetchUser();
        
        // Listen for auth changes
        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            setUser(session?.user || null);
        });

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        setUser(null);
        navigate('/'); // Redirect after logout
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
                        {user ? (
                            <div className="user-menu">
                                <button onClick={handleLogout} className="logout-btn">Logout</button>
                            </div>
                        ) : (
                            <>
                                <Link to="/login" className="auth-link">Login</Link>
                                <span className="auth-divider">|</span>
                                <Link to="/signup" className="auth-link">Sign Up</Link>
                            </>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
