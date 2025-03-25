import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './listingSection.css';

const ListingSection = () => {
    const [showAddForm, setShowAddForm] = useState(false);
    
    const toggleAddForm = () => {
        setShowAddForm(!showAddForm);
    };
    
    return (
        <section className="listing-section" id="listing">
            <div className="listing-container">
                <div className="listing-content">
                    <h2>List Your Property With Us</h2>
                    <p className="listing-description">
                        Join thousands of property owners who trust Rentora to find
                        reliable tenants quickly. Our platform makes it easy to showcase
                        your property to thousands of potential renters.
                    </p>
                    
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <div className="benefit-icon visibility-icon"></div>
                            <h3>Maximum Visibility</h3>
                            <p>Your property gets featured to thousands of verified users daily</p>
                        </div>
                        
                        <div className="benefit-card">
                            <div className="benefit-icon support-icon"></div>
                            <h3>24/7 Support</h3>
                            <p>Our dedicated team is always ready to assist you</p>
                        </div>
                        
                        <div className="benefit-card">
                            <div className="benefit-icon verified-icon"></div>
                            <h3>Verified Tenants</h3>
                            <p>We screen all potential tenants to ensure quality matches</p>
                        </div>
                        
                        <div className="benefit-card">
                            <div className="benefit-icon tools-icon"></div>
                            <h3>Landlord Tools</h3>
                            <p>Access analytics, tenant communication, and payment tracking</p>
                        </div>
                    </div>
                    
                    <button className="primary-button add-property-btn" onClick={toggleAddForm}>
                        Add Your Property
                    </button>
                    
                    {showAddForm && (
                        <div className="add-property-form">
                            <h3>Add New Property</h3>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="propertyTitle">Property Title</label>
                                    <input type="text" id="propertyTitle" placeholder="e.g. Modern Downtown Apartment" />
                                </div>
                                
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="propertyType">Property Type</label>
                                        <select id="propertyType">
                                            <option value="">Select Type</option>
                                            <option value="apartment">Apartment</option>
                                            <option value="house">House</option>
                                            <option value="condo">Condo</option>
                                            <option value="studio">Studio</option>
                                        </select>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="bedrooms">Bedrooms</label>
                                        <input type="number" id="bedrooms" min="0" placeholder="2" />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="bathrooms">Bathrooms</label>
                                        <input type="number" id="bathrooms" min="0" step="0.5" placeholder="1.5" />
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="address">Address</label>
                                    <input type="text" id="address" placeholder="Full address" />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="price">Monthly Rent ($)</label>
                                    <input type="number" id="price" min="0" placeholder="1500" />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <textarea id="description" rows="4" placeholder="Describe your property..."></textarea>
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="photos">Upload Photos</label>
                                    <input type="file" id="photos" multiple />
                                </div>
                                
                                <div className="form-actions">
                                    <button type="button" className="cancel-btn" onClick={toggleAddForm}>Cancel</button>
                                    <button type="submit" className="primary-button">Submit Property</button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ListingSection;