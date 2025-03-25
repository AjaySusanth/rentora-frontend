import React from 'react';
import { Link } from 'react-router-dom';
import './hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-container">
                <div className="hero-content">
                    <h1>Find Your <span className="gradient-text">Dream Home</span> Today</h1>
                    <p className="hero-subtitle">
                        Discover thousands of curated properties for rent in prime locations.
                        Your perfect home is just a click away.
                    </p>
                    <div className="hero-features">
                        <div className="hero-feature">
                            <div className="feature-icon verified-icon"></div>
                            <p>Verified listings</p>
                        </div>
                        <div className="hero-feature">
                            <div className="feature-icon search-icon"></div>
                            <p>Smart search</p>
                        </div>
                        <div className="hero-feature">
                            <div className="feature-icon support-icon"></div>
                            <p>24/7 Support</p>
                        </div>
                    </div>
                    <div className="hero-cta">
                        <Link to="/explore" className="primary-button">Explore Properties</Link>
                        <a href="#listing" className="secondary-button">List Your Property</a>
                    </div>
                </div>
                <div className="hero-visual">
                    <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80" 
                         alt="Modern home interior" 
                         className="hero-img" />
                </div>
            </div>

            <div className="hero-stats">
                <div className="stat-item">
                    <div className="stat-number">50K+</div>
                    <div className="stat-label">Properties</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                    <div className="stat-number">10K+</div>
                    <div className="stat-label">Satisfied Tenants</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                    <div className="stat-number">200+</div>
                    <div className="stat-label">Cities</div>
                </div>
            </div>
        </section>
    );
};

export default Hero;