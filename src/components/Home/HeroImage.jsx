import React from 'react';

const HeroImage = () => {
    return (
        <div className="hero-image">
            <img src={`${process.env.PUBLIC_URL}/images/house-3.png`} alt="Modern apartment interior" />
            <div className="floating-element top-left">
                <i className="fas fa-home"></i>
                <span>Premium Locations</span>
            </div>
            <div className="floating-element right-middle">
                <i className="fas fa-star"></i>
                <span>Top Rated</span>
            </div>
            <div className="floating-element bottom-left">
                <i className="fas fa-dollar-sign"></i>
                <span>Best Prices</span>
            </div>
        </div>
    );
};

export default HeroImage;