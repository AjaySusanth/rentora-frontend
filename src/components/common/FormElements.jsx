import React from 'react';

export const FormElements = ({ 
    ownerName, 
    ownerEmail, 
    ownerPhone, 
    propertyType, 
    propertyAddress, 
    bedrooms, 
    bathrooms, 
    area, 
    rentalPrice, 
    description, 
    propertyImages, 
    handleChange 
}) => {
    return (
        <>
            <div className="form-group">
                <label htmlFor="ownerName">Your Name *</label>
                <input 
                    type="text" 
                    id="ownerName" 
                    name="ownerName" 
                    value={ownerName} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            
            <div className="form-group">
                <label htmlFor="ownerEmail">Email *</label>
                <input 
                    type="email" 
                    id="ownerEmail" 
                    name="ownerEmail" 
                    value={ownerEmail} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            
            <div className="form-group">
                <label htmlFor="ownerPhone">Phone *</label>
                <input 
                    type="tel" 
                    id="ownerPhone" 
                    name="ownerPhone" 
                    value={ownerPhone} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            
            <div className="form-group">
                <label htmlFor="propertyType">Property Type *</label>
                <select 
                    id="propertyType" 
                    name="propertyType" 
                    value={propertyType} 
                    onChange={handleChange} 
                    required
                >
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
                <textarea 
                    id="propertyAddress" 
                    name="propertyAddress" 
                    value={propertyAddress} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            
            <div className="form-row">
                <div className="form-group half">
                    <label htmlFor="bedrooms">Bedrooms *</label>
                    <input 
                        type="number" 
                        id="bedrooms" 
                        name="bedrooms" 
                        value={bedrooms} 
                        onChange={handleChange} 
                        min="0" 
                        required 
                    />
                </div>
                
                <div className="form-group half">
                    <label htmlFor="bathrooms">Bathrooms *</label>
                    <input 
                        type="number" 
                        id="bathrooms" 
                        name="bathrooms" 
                        value={bathrooms} 
                        onChange={handleChange} 
                        min="0" 
                        step="0.5" 
                        required 
                    />
                </div>
            </div>
            
            <div className="form-row">
                <div className="form-group half">
                    <label htmlFor="area">Area (sq ft) *</label>
                    <input 
                        type="number" 
                        id="area" 
                        name="area" 
                        value={area} 
                        onChange={handleChange} 
                        min="0" 
                        required 
                    />
                </div>
                
                <div className="form-group half">
                    <label htmlFor="rentalPrice">Monthly Rent ($) *</label>
                    <input 
                        type="number" 
                        id="rentalPrice" 
                        name="rentalPrice" 
                        value={rentalPrice} 
                        onChange={handleChange} 
                        min="0" 
                        required 
                    />
                </div>
            </div>
            
            <div className="form-group">
                <label htmlFor="description">Property Description *</label>
                <textarea 
                    id="description" 
                    name="description" 
                    rows="4" 
                    value={description} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            
            <div className="form-group">
                <label htmlFor="propertyImages">Upload Images</label>
                <input 
                    type="file" 
                    id="propertyImages" 
                    name="propertyImages[]" 
                    multiple 
                    accept="image/*" 
                    onChange={handleChange} 
                />
            </div>
        </>
    );
};