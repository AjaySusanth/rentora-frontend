import React from 'react';
import Hero from '../components/Home/Hero';
import ListingSection from '../components/Listing/ListingSection';
import AboutSection from '../components/About/AboutSection';

const HomePage = () => {
    return (
        <div className="home-page">
            <Hero />
            <ListingSection id="listing" /> {/* This now has id="listing" */}
            <AboutSection id="about" /> {/* This should have id="about" */}
        </div>
    );
};

export default HomePage;