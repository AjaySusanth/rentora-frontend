import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './detailsPage.css';

const DetailsPage = () => {
    const { id } = useParams();
    const [accommodation, setAccommodation] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAccommodationDetails = async () => {
            try {
                // In a real app, fetch from API: `/api/accommodations/${id}`
                // Mock data for demonstration
                const mockData = {
                    accommodation_id: parseInt(id),
                    name: 'Sunshine Hostel',
                    type: 'hostel',
                    description: 'A beautiful hostel with all modern amenities located near the university. Features include 24/7 security, high-speed internet, air conditioning, common study areas, and a recreational room. We also provide regular housekeeping services and have a cafeteria that serves nutritious meals.',
                    college_id: 1,
                    collegeName: 'University of Technology',
                    distance_km: 0.8,
                    district: 'Central',
                    contact: '123-456-7890',
                    address: '123 University Ave, Central District',
                    created_at: '2023-01-15',
                    owner: {
                        name: 'John Smith',
                        email: 'john@example.com',
                        phone: '123-456-7890'
                    },
                    photos: [
                        { photo_id: 1, photo_url: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', is_featured: true },
                        { photo_id: 2, photo_url: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', is_featured: false },
                        { photo_id: 3, photo_url: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', is_featured: false },
                        { photo_id: 4, photo_url: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', is_featured: false }
                    ],
                    roomTypes: [
                        { room_type_id: 1, room_type_name: 'Single Room', rent: 5000, available_units: 3, is_available: true },
                        { room_type_id: 2, room_type_name: 'Double Sharing', rent: 3500, available_units: 5, is_available: true },
                        { room_type_id: 3, room_type_name: 'Triple Sharing', rent: 2800, available_units: 2, is_available: true }
                    ],
                    amenities: [
                        'Wi-Fi', 'Air Conditioning', '24/7 Security', 'Power Backup', 
                        'Study Area', 'Laundry Service', 'Housekeeping', 'Cafeteria'
                    ]
                };

                setAccommodation(mockData);
                setSelectedImage(mockData.photos.find(p => p.is_featured)?.photo_url || mockData.photos[0]?.photo_url);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching accommodation details:', err);
                setError('Failed to load accommodation details');
                setLoading(false);
            }
        };

        fetchAccommodationDetails();
    }, [id]);

    if (loading) return <div className="loading-spinner">Loading accommodation details...</div>;
    if (error) return <div className="error-message">{error}</div>;
    if (!accommodation) return <div className="not-found">Accommodation not found</div>;

    return (
        <div className="details-page">
            <div className="details-container">
                <div className="details-header">
                    <div className="header-content">
                        <div className="back-button">
                            <Link to="/explore">
                                <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" fill="currentColor"></path>
                                </svg>
                                Back to Explore
                            </Link>
                        </div>
                        <h1>{accommodation.name}</h1>
                        <div className="property-meta">
                            <span className="property-type">{accommodation.type.toUpperCase()}</span>
                            <span className="property-location">
                                <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"></path>
                                </svg>
                                {accommodation.district}
                            </span>
                            <span className="property-distance">
                                <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" fill="currentColor"></path>
                                </svg>
                                {accommodation.distance_km} km from {accommodation.collegeName}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="image-gallery">
                    <div className="main-image">
                        <img src={selectedImage} alt={accommodation.name} />
                    </div>
                    <div className="thumbnail-gallery">
                        {accommodation.photos.map(photo => (
                            <div 
                                key={photo.photo_id} 
                                className={`thumbnail ${selectedImage === photo.photo_url ? 'active' : ''}`}
                                onClick={() => setSelectedImage(photo.photo_url)}
                            >
                                <img src={photo.photo_url} alt={`${accommodation.name} - ${photo.photo_id}`} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="details-content">
                    <div className="property-details">
                        <section className="description-section">
                            <h2>About this accommodation</h2>
                            <p>{accommodation.description}</p>
                        </section>

                        <section className="rooms-section">
                            <h2>Available Rooms</h2>
                            <div className="room-types-grid">
                                {accommodation.roomTypes.map(room => (
                                    <div key={room.room_type_id} className="room-card">
                                        <div className="room-header">
                                            <h3>{room.room_type_name}</h3>
                                            <div className={`availability-badge ${room.is_available ? 'available' : 'unavailable'}`}>
                                                {room.is_available ? `${room.available_units} Available` : 'Not Available'}
                                            </div>
                                        </div>
                                        <div className="room-price">₹{room.rent} <span>/month</span></div>
                                        <button className="book-btn">Contact Owner</button>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="amenities-section">
                            <h2>Amenities</h2>
                            <div className="amenities-grid">
                                {accommodation.amenities.map((amenity, index) => (
                                    <div key={index} className="amenity-item">
                                        <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="#007bff"></path>
                                        </svg>
                                        <span>{amenity}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="location-section">
                            <h2>Location</h2>
                            <div className="address">
                                <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#718096"></path>
                                </svg>
                                <p>{accommodation.address}</p>
                            </div>
                            <div className="location-map">
                                <img 
                                    src={`https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(accommodation.address)}&zoom=15&size=600x300&maptype=roadmap&markers=color:red%7C${encodeURIComponent(accommodation.address)}&key=YOUR_API_KEY`}
                                    alt="Location map"
                                    className="map-image"
                                />
                                <p className="map-note">Map location is approximate</p>
                            </div>
                        </section>

                        <section className="contact-section">
                            <h2>Contact Information</h2>
                            <div className="contact-info">
                                <div className="contact-item">
                                    <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5C20.55,15.5 21,15.95 21,16.5V20C21,20.55 20.55,21 20,21C10.61,21 3,13.39 3,4C3,3.45 3.45,3 4,3H7.5C8.05,3 8.5,3.45 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" fill="#718096"></path>
                                    </svg>
                                    <span>{accommodation.contact}</span>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="booking-sidebar">
                        <div className="booking-card">
                            <h3>Interested in this property?</h3>
                            <p>Contact the owner for more information or to schedule a viewing</p>
                            <button className="contact-owner-btn">
                                <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20,15.5C18.8,15.5 17.5,15.3 16.4,14.9C16.3,14.9 16.2,14.9 16.1,14.9C15.8,14.9 15.6,15 15.4,15.2L13.2,17.4C10.4,15.9 8,13.6 6.6,10.8L8.8,8.6C9.1,8.3 9.2,7.9 9,7.6C8.7,6.5 8.5,5.2 8.5,4C8.5,3.5 8,3 7.5,3H4C3.5,3 3,3.5 3,4C3,13.4 10.6,21 20,21C20.5,21 21,20.5 21,20V16.5C21,16 20.5,15.5 20,15.5M5,5H6.5C6.6,5.9 6.8,6.8 7,7.6L5.8,8.8C5.4,7.6 5.1,6.3 5,5M19,19C17.7,18.9 16.4,18.6 15.2,18.2L16.4,17C17.2,17.2 18.1,17.4 19,17.4V19Z" fill="white"></path>
                                </svg>
                                Call Owner
                            </button>
                            <div className="property-share">
                                <p>Share this property:</p>
                                <div className="share-icons">
                                    <a href="#" className="share-icon">
                                        <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" fill="#4267B2"></path>
                                        </svg>
                                    </a>
                                    <a href="#" className="share-icon">
                                        <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" fill="#1DA1F2"></path>
                                        </svg>
                                    </a>
                                    <a href="#" className="share-icon">
                                        <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#4267B2"></path>
                                        </svg>
                                    </a>
                                    <a href="#" className="share-icon">
                                        <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z" fill="#718096"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;