import React, { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import './listing.css';

const ListingModal = () => {
    const { isModalOpen, closeModal } = useContext(ModalContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className={`modal ${isModalOpen ? 'open' : ''}`} onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close-modal" onClick={closeModal}>&times;</span>
                <h2>List Your Property</h2>
                
                <form id="listingForm" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="ownerName">Your Name *</label>
                        <input type="text" id="ownerName" name="ownerName" required />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="ownerEmail">Email *</label>
                        <input type="email" id="ownerEmail" name="ownerEmail" required />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="ownerPhone">Phone *</label>
                        <input type="tel" id="ownerPhone" name="ownerPhone" required />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="propertyType">Property Type *</label>
                        <select id="propertyType" name="propertyType" required>
                            <option value="">Select Property Type</option>
                            <option value="apartment">Apartment</option>
                            <option value="house">House</option>
                            <option value="condo">Condo</option>
                            <option value="villa">Villa</option>
                            <option value="commercial">Commercial</option>
                        </select>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="propertyAddress">Property Address *</label>
                        <textarea id="propertyAddress" name="propertyAddress" required></textarea>
                    </div>
                    
                    <div className="form-row">
                        <div className="form-group half">
                            <label htmlFor="bedrooms">Bedrooms *</label>
                            <input type="number" id="bedrooms" name="bedrooms" min="0" required />
                        </div>
                        
                        <div className="form-group half">
                            <label htmlFor="bathrooms">Bathrooms *</label>
                            <input type="number" id="bathrooms" name="bathrooms" min="0" step="0.5" required />
                        </div>
                    </div>
                    
                    <div className="form-row">
                        <div className="form-group half">
                            <label htmlFor="area">Area (sq ft) *</label>
                            <input type="number" id="area" name="area" min="0" required />
                        </div>
                        
                        <div className="form-group half">
                            <label htmlFor="rentalPrice">Monthly Rent ($) *</label>
                            <input type="number" id="rentalPrice" name="rentalPrice" min="0" required />
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="description">Property Description *</label>
                        <textarea id="description" name="description" rows="4" required></textarea>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="propertyImages">Upload Images</label>
                        <input type="file" id="propertyImages" name="propertyImages[]" multiple accept="image/*" />
                    </div>
                    
                    <div className="form-group">
                        <button type="submit" className="primary-button">Submit Listing</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ListingModal;