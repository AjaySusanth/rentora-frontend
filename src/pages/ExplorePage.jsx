import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './explorePage.css';

const ExplorePage = () => {
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
        // Fetch accommodations and colleges data
        const fetchData = async () => {
            try {
                // In a real app, these would be API calls
                // Example: const response = await fetch('/api/accommodations');
                
                // Mock data for demonstration
                const mockAccommodations = [
                    {
                        accommodation_id: 1,
                        name: 'Sunshine Hostel',
                        type: 'hostel',
                        description: 'A beautiful hostel with all modern amenities located near the university.',
                        college_id: 1,
                        distance_km: 0.8,
                        district: 'Central',
                        contact: '123-456-7890',
                        address: '123 University Ave, Central District',
                        created_at: '2023-01-15',
                        photos: [
                            { photo_id: 1, photo_url: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', is_featured: true }
                        ],
                        roomTypes: [
                            { room_type_id: 1, room_type_name: 'Single Room', rent: 5000, available_units: 3 },
                            { room_type_id: 2, room_type_name: 'Double Sharing', rent: 3500, available_units: 5 }
                        ],
                        collegeName: 'University of Technology'
                    },
                    {
                        accommodation_id: 2,
                        name: 'Green Acres PG',
                        type: 'pg',
                        description: 'Comfortable PG accommodation with home-cooked meals and Wi-Fi.',
                        college_id: 2,
                        distance_km: 1.2,
                        district: 'North',
                        contact: '987-654-3210',
                        address: '45 College Road, North District',
                        created_at: '2023-02-20',
                        photos: [
                            { photo_id: 3, photo_url: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', is_featured: true }
                        ],
                        roomTypes: [
                            { room_type_id: 3, room_type_name: 'Single Room with AC', rent: 7000, available_units: 2 },
                            { room_type_id: 4, room_type_name: 'Single Room', rent: 5500, available_units: 4 }
                        ],
                        collegeName: 'State College'
                    },
                    {
                        accommodation_id: 3,
                        name: 'City View Apartments',
                        type: 'apartment',
                        description: 'Modern apartments with stunning city views and 24/7 security.',
                        college_id: 3,
                        distance_km: 2.5,
                        district: 'East',
                        contact: '555-123-4567',
                        address: '78 Highland Ave, East District',
                        created_at: '2023-03-10',
                        photos: [
                            { photo_id: 5, photo_url: 'https://images.unsplash.com/photo-1560185007-5f0bb1866cab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', is_featured: true }
                        ],
                        roomTypes: [
                            { room_type_id: 5, room_type_name: '1BHK', rent: 12000, available_units: 1 },
                            { room_type_id: 6, room_type_name: '2BHK', rent: 18000, available_units: 2 }
                        ],
                        collegeName: 'Liberal Arts University'
                    },
                    {
                        accommodation_id: 4,
                        name: 'Campus Corner',
                        type: 'flat',
                        description: 'Fully furnished flats just steps away from campus with laundry facilities.',
                        college_id: 4,
                        distance_km: 0.3,
                        district: 'West',
                        contact: '888-777-6666',
                        address: '10 Campus Drive, West District',
                        created_at: '2023-04-05',
                        photos: [
                            { photo_id: 7, photo_url: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', is_featured: true }
                        ],
                        roomTypes: [
                            { room_type_id: 7, room_type_name: 'Studio Flat', rent: 8500, available_units: 3 },
                            { room_type_id: 8, room_type_name: '1BHK Flat', rent: 14000, available_units: 1 }
                        ],
                        collegeName: 'Science & Engineering Institute'
                    }
                ];

                const mockColleges = [
                    { college_id: 1, college_name: 'University of Technology', district: 'Central', address: 'University Campus, Central District' },
                    { college_id: 2, college_name: 'State College', district: 'North', address: 'College Road, North District' },
                    { college_id: 3, college_name: 'Liberal Arts University', district: 'East', address: 'Arts Avenue, East District' },
                    { college_id: 4, college_name: 'Science & Engineering Institute', district: 'West', address: 'Science Park, West District' }
                ];

                setAccommodations(mockAccommodations);
                setFilteredAccommodations(mockAccommodations);
                setColleges(mockColleges);
                
                // Extract unique districts from accommodations
                const uniqueDistricts = [...new Set(mockAccommodations.map(acc => acc.district))];
                setDistricts(uniqueDistricts);
                
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

        // Apply name search
        if (filters.nameSearch) {
            const query = filters.nameSearch.toLowerCase();
            result = result.filter(acc => 
                acc.name.toLowerCase().includes(query)
            );
        }

        // Apply college filter
        if (filters.collegeId) {
            result = result.filter(acc => acc.college_id === parseInt(filters.collegeId));
        }

        // Apply accommodation type filter
        if (filters.type) {
            result = result.filter(acc => acc.type === filters.type);
        }

        // Apply district filter
        if (filters.district) {
            result = result.filter(acc => acc.district === filters.district);
        }

        // Apply distance filter
        if (filters.maxDistance) {
            result = result.filter(acc => acc.distance_km <= parseFloat(filters.maxDistance));
        }

        // Apply price range filters
        if (filters.minPrice || filters.maxPrice) {
            result = result.filter(acc => {
                // Find min price from all room types
                const minRoomPrice = Math.min(...acc.roomTypes.map(room => room.rent));
                
                if (filters.minPrice && minRoomPrice < parseFloat(filters.minPrice)) {
                    return false;
                }
                
                if (filters.maxPrice && minRoomPrice > parseFloat(filters.maxPrice)) {
                    return false;
                }
                
                return true;
            });
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
            minPrice: '',
            maxPrice: ''
        });
    };

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
                        <button type="submit" className="search-btn">
                            <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="white"></path>
                            </svg>
                        </button>
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
                                <option value="apartment">Apartment</option>
                                <option value="flat">Flat</option>
                                <option value="room">Single Room</option>
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

                        <div className="filter-group">
                            <label>Max Distance (km)</label>
                            <input
                                type="number"
                                name="maxDistance"
                                value={filters.maxDistance}
                                onChange={handleFilterChange}
                                placeholder="e.g. 2"
                                min="0"
                                step="0.1"
                            />
                        </div>

                        <div className="filter-group">
                            <label>Price Range (₹)</label>
                            <div className="price-range">
                                <input
                                    type="number"
                                    name="minPrice"
                                    value={filters.minPrice}
                                    onChange={handleFilterChange}
                                    placeholder="Min"
                                    min="0"
                                />
                                <span>to</span>
                                <input
                                    type="number"
                                    name="maxPrice"
                                    value={filters.maxPrice}
                                    onChange={handleFilterChange}
                                    placeholder="Max"
                                    min="0"
                                />
                            </div>
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
                                    <Link to={`/details/${accommodation.accommodation_id}`} key={accommodation.accommodation_id} className="accommodation-card">
                                        <div className="accommodation-image">
                                            <img 
                                                src={accommodation.photos.find(p => p.is_featured)?.photo_url || accommodation.photos[0]?.photo_url || 'https://via.placeholder.com/300x200?text=No+Image'} 
                                                alt={accommodation.name} 
                                            />
                                            <div className="accommodation-type">{accommodation.type.toUpperCase()}</div>
                                        </div>
                                        <div className="accommodation-info">
                                            <h3>{accommodation.name}</h3>
                                            <p className="college-name">Near {accommodation.collegeName}</p>
                                            <p className="location">{accommodation.district} • {accommodation.distance_km} km from college</p>
                                            <p className="price">₹{Math.min(...accommodation.roomTypes.map(room => room.rent))} onwards</p>
                                            <div className="availability-tag">
                                                {accommodation.roomTypes.reduce((total, room) => total + room.available_units, 0)} units available
                                            </div>
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