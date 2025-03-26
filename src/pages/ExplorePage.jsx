import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './explorePage.css';
import axios from 'axios';

const API = import.meta.env.VITE_BACKEND_URL;

const ExplorePage = () => {
    const accommodationImages = {
        hostel: '/images/hostel.jpg',
        pg: '/images/pg.jpg',
        rented_home: '/images/rented_home.jpg',
        default: '/images/default.jpg'
    };
    
    const [accommodations, setAccommodations] = useState([]);
    const [filteredAccommodations, setFilteredAccommodations] = useState([]);
    const [colleges, setColleges] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        nameSearch: '',
        collegeId: '',
        type: '',
        district: '',
        maxDistance: '',
        minPrice: '',
        maxPrice: ''
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [accommodationsRes, districtsRes, collegesRes] = await Promise.all([
                    axios.get(`${API}/accomodations`),
                    axios.get(`${API}/accomodations/districts`),
                    axios.get(`${API}/college`),
                ]);

            

                setAccommodations(accommodationsRes.data);
                setFilteredAccommodations(accommodationsRes.data);
                setDistricts(districtsRes.data)
                setColleges(collegesRes.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    
    
    useEffect(() => {
        // Apply filters when filters change
        applyFilters();
    }, [filters]);

    const applyFilters = () => {
        let result = [...accommodations];

    
        if (filters.nameSearch) {
            const query = filters.nameSearch.toLowerCase();
            result = result.filter(acc => acc.name.toLowerCase().includes(query));
        }

        if (filters.collegeId) {
            result = result.filter(acc => acc.college_id === parseInt(filters.collegeId));
        }

        if (filters.type) {
            result = result.filter(acc => acc.type === filters.type);
        }

        if (filters.district) {
            result = result.filter(acc => acc.district === filters.district);
        }

        if (filters.maxDistance) {
            result = result.filter(acc => acc.distance_km <= parseFloat(filters.maxDistance));
        }

        setFilteredAccommodations(result);
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value
        });
    };

   // console.log(filters)

    const handleSearch = (e) => {
        e.preventDefault();
        applyFilters();
    };

    const resetFilters = () => {
        setFilters({
            nameSearch: '',
            collegeId: '',
            type: '',
            district: '',
            maxDistance: '',
        });
    };
    console.log(accommodations)
    return (
        <div className="explore-page">
        <div className="explore-header">
            <h1>Find Your Perfect Accommodation</h1>
            <p>Search and filter accommodations near colleges</p>
        </div>

        <div className="explore-container">
            <div className="search-and-filters">
                <form onSubmit={handleSearch} className="search-bar">
                    <input
                        type="text"
                        placeholder="Search by accommodation name..."
                        value={filters.nameSearch}
                        name="nameSearch"
                        onChange={handleFilterChange}
                    />
                    <button type="submit" className="search-btn">Search</button>
                </form>

                <div className="filters">
                    <div className="filter-group">
                        <label>College</label>
                        <select name="collegeId" value={filters.collegeId} onChange={handleFilterChange}>
                            <option value="">All Colleges</option>
                            {colleges.map(college => (
                                <option key={college.college_id} value={college.college_id}>
                                    {college.college_name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="filter-group">
                        <label>Accommodation Type</label>
                        <select name="type" value={filters.type} onChange={handleFilterChange}>
                            <option value="">All Types</option>
                            <option value="hostel">Hostel</option>
                            <option value="pg">PG</option>
                            <option value="rental">Rented Home</option>
                        </select>
                    </div>

                    <div className="filter-group">
                        <label>District</label>
                        <select name="district" value={filters.district} onChange={handleFilterChange}>
                            <option value="">All Districts</option>
                            {districts.map((district, index) => (
                                <option key={index} value={district}>{district}</option>
                            ))}
                        </select>
                    </div>

                    <button type="button" className="reset-filters-btn" onClick={resetFilters}>
                        Reset Filters
                    </button>
                </div>
            </div>

            {loading ? (
                <div className="loading-spinner">Loading...</div>
            ) : (
                <>
                    <div className="results-info">
                        <p>{filteredAccommodations.length} accommodation(s) found</p>
                    </div>

                    <div className="accommodations-grid">
                        {filteredAccommodations.length > 0 ? (
                            filteredAccommodations.map(accommodation => (
                                <Link to={`/details/${accommodation.accommodation_id}`} key={`acc-${accommodation.accommodation_id}`} className="accommodation-card">
                                    <div className="accommodation-image">
                                        <img 
                                            src={accommodationImages[accommodation.type] || accommodationImages.default} 
                                            alt={accommodation.name} 
                                        />
                                        <div className="accommodation-type">{accommodation.type}</div>
                                    </div>
                                    <div className="accommodation-info">
                                        <h3>{accommodation.name}</h3>
                                        <p>{accommodation.address}</p>
                                        <p className="college-name">Near {accommodation.collegeName}</p>
                                        <p className="location">{accommodation.distance_km} km from college</p>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="no-results">
                                <p>No accommodations found matching your criteria.</p>
                                <button className="reset-filters-btn" onClick={resetFilters}>Reset Filters</button>
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    </div>
    );
};

export default ExplorePage;