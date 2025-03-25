import React from 'react';
import './aboutSection.css';

const AboutSection = () => {
    // If you don't have the image in public/images, use this placeholder
    const aboutImageUrl = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80";

    return (
        <section className="about-section" id="about">
            <div className="about-container">
                <div className="about-header">
                    <h2>About <span className="gradient-text">Rentora</span></h2>
                    <p className="about-subtitle">Reimagining the Way People Find Their Dream Homes</p>
                </div>
                
                <div className="about-content">
                    <div className="about-image">
                        {/* Use the placeholder URL if the image doesn't exist in your public folder */}
                        <img src={aboutImageUrl} alt="Rentora Team" />
                        <div className="image-overlay"></div>
                    </div>
                    
                    <div className="about-text">
                        <h3>Our Mission</h3>
                        <p>
                            At Rentora, we believe finding a home should be exciting, not exhausting. 
                            Our mission is to streamline the rental process by connecting property owners 
                            with their ideal tenants through a transparent, efficient platform.
                        </p>
                        
                        <h3>Our Story</h3>
                        <p>
                            Founded in 2022, Rentora was born from a simple observation: the rental market 
                            needed innovation. Our founders experienced firsthand the challenges of finding 
                            quality housing and decided to create a solution that benefits both tenants and 
                            property owners.
                        </p>
                        
                        <div className="about-values">
                            <div className="value-item">
                                <div className="value-icon transparency-icon"></div>
                                <h4>Transparency</h4>
                                <p>No hidden fees or surprises</p>
                            </div>
                            
                            <div className="value-item">
                                <div className="value-icon innovation-icon"></div>
                                <h4>Innovation</h4>
                                <p>Constantly improving our platform</p>
                            </div>
                            
                            <div className="value-item">
                                <div className="value-icon community-icon"></div>
                                <h4>Community</h4>
                                <p>Building relationships that last</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;