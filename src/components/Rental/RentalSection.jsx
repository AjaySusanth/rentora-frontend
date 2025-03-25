import React from 'react';
import Slideshow from './Slideshow';
import RentalInfo from './RentalInfo';
import './rental.css';

const RentalSection = () => {
    return (
        <section className="rental-section" id="rental">
            <h2 className="section-title">Discover the Comfort Living</h2>
            <p className="section-subtitle">Find your perfect rental from our curated collection of properties</p>
            
            <div className="rental-container">
                <div className="rental-content">
                    <Slideshow />
                    <RentalInfo />
                </div>
            </div>
        </section>
    );
};

export default RentalSection;