import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import './exploreSection.css';

const ExploreSection = () => {
    const [filters, setFilters] = useState({
        location: '',
        priceMin: '',
        priceMax: '',
        bedrooms: '',
        propertyType: ''
    });
    
    // Sample property data
    const properties = [
        {
            id: 1,
            title: 'Modern Downtown Apartment',
            price: 1800,
            location: 'Seattle, WA',
            bedrooms: 2,
            bathrooms: 1,
            area: 950,
            type: 'Apartment',
            image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 2,
            title: 'Luxury Condo with View',
            price: 2500,
            location: 'San Francisco, CA',
            bedrooms: 3,
            bathrooms: 2,
            area: 1200,
            type: 'Condo',
            image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 3,
            title: 'Cozy Studio in Historic District',
            price: 1200,
            location: 'Boston, MA',
            bedrooms: 0,
            bathrooms: 1,
            area: 550,
            type: 'Studio',
            image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 4,
            title: 'Spacious Family Home',
            price: 3000,
            location: 'Austin, TX',
            bedrooms: 4,
            bathrooms: 2.5,
            area: 2200,
            type: 'House',
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 5,
            title: 'Modern Loft near University',
            price: 1650,
            location: 'Chicago, IL',
            bedrooms: 1,
            bathrooms: 1,
            area: 800,
            type: 'Loft',
            image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 6,
            title: 'Waterfront Apartment',
            price: 2200,
            location: 'Miami, FL',
            bedrooms: 2,
            bathrooms: 2,
            area: 1050,
            type: 'Apartment',
            image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
        },
    ];
    
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value
        });
    };
    
    return (
        <section className="explore-section">
            <div className="explore-container">
                <div className="explore-header">
                    <h1>Explore Properties</h1>
                    <p>Find your perfect home from our curated selection of properties</p>
                </div>
                
                <div className="search-filters">
                    <div className="filter-group">
                        <label htmlFor="location">Location</label>
                        <input 
                            type="text" 
                            id="location" 
                            name="location" 
                            placeholder="City, State" 
                            value={filters.location}
                            onChange={handleFilterChange}
                        />
                    </div>
                    
                    <div className="filter-group">
                        <label htmlFor="priceRange">Price Range</label>
                        <div className="price-inputs">
                            <input 
                                type="number" 
                                id="priceMin" 
                                name="priceMin" 
                                placeholder="Min" 
                                value={filters.priceMin}
                                onChange={handleFilterChange}
                            />
                            <span>to</span>
                            <input 
                                type="number" 
                                id="priceMax" 
                                name="priceMax" 
                                placeholder="Max" 
                                value={filters.priceMax}
                                onChange={handleFilterChange}
                            />
                        </div>
                    </div>
                    
                    <div className="filter-group">
                        <label htmlFor="bedrooms">Bedrooms</label>
                        <select 
                            id="bedrooms" 
                            name="bedrooms"
                            value={filters.bedrooms}
                            onChange={handleFilterChange}
                        >
                            <option value="">Any</option>
                            <option value="0">Studio</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4+</option>
                        </select>
                    </div>
                    
                    <div className="filter-group">
                        <label htmlFor="propertyType">Property Type</label>
                        <select 
                            id="propertyType" 
                            name="propertyType"
                            value={filters.propertyType}
                            onChange={handleFilterChange}
                        >
                            <option value="">Any</option>
                            <option value="Apartment">Apartment</option>
                            <option value="House">House</option>
                            <option value="Condo">Condo</option>
                            <option value="Studio">Studio</option>
                            <option value="Loft">Loft</option>
                        </select>
                    </div>
                    
                    <button className="search-button">
                        <i className="search-icon"></i>
                        Search
                    </button>
                </div>
                
                <div className="properties-grid">
                    {properties.map(property => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExploreSection;