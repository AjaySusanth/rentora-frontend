import React from 'react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
    const { id, title, price, location, bedrooms, bathrooms, area, type, image } = property;
    
    return (
        <div className="property-card">
            <div className="property-image">
                <img src={image} alt={title} />
                <div className="property-type">{type}</div>
            </div>
            <div className="property-details">
                <h3>{title}</h3>
                <p className="property-location">{location}</p>
                <p className="property-price">${price}/month</p>
                <div className="property-features">
                    <span>{bedrooms} {bedrooms === 1 ? 'Bed' : 'Beds'}</span>
                    <span>{bathrooms} {bathrooms === 1 ? 'Bath' : 'Baths'}</span>
                    <span>{area} sq ft</span>
                </div>
                <Link to={`/property/${id}`} className="view-details-btn">View Details</Link>
            </div>
        </div>
    );
};

export default PropertyCard;