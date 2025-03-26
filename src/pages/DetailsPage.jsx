import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './detailsPage.css';
import axios from 'axios';

const API = import.meta.env.VITE_BACKEND_URL;

const DetailsPage = () => {
    const { id } = useParams();
    const [accommodation, setAccommodation] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAccommodationDetails = async () => {
            try {
                const response = await axios.get(`${API}/accomodations/${id}`);
                const accommodationData = response.data
                console.log(accommodationData)
                setAccommodation({
                    ...accommodationData,
                    collegeName: accommodationData.college.name,
                    owner: {
                        name: accommodationData.owner.name,
                        email: accommodationData.owner.email,
                    },
                    // Ensure roomTypes exists even if empty
                    roomTypes: accommodationData.roomTypes || []
                });
                setLoading(false);
            } catch (err) {
                console.error('Error fetching accommodation details:', err);
                setError(err.response?.data?.error || 'Failed to load accommodation details');
                setLoading(false);
            }
        };

        fetchAccommodationDetails();
    }, [id]);

    if (loading) return <div className="loading-spinner">Loading accommodation details...</div>;
    if (error) return <div className="error-message">{error}</div>;
    if (!accommodation) return <div className="not-found">Accommodation not found</div>;

    const isHostel = accommodation.type === 'hostel';

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
                            {accommodation.distance} km from {accommodation.collegeName}
                        </span>
                    </div>
                </div>
            </div>

            <div className="details-content">
                <div className="property-details">
                    <section className="description-section">
                        <h2>About this accommodation</h2>
                        <p>{accommodation.description}</p>
                    </section>

                    {/* Conditional Rendering based on accommodation type */}
                    {isHostel ? (
                        <section className="rooms-section">
                            <h2>Available Rooms</h2>
                            <div className="room-types-grid">
                                {accommodation.roomTypes.map(room => (
                                    <div key={room.id} className="room-card">
                                        <div className="room-header">
                                            <h3>{room.room_type_name}</h3>
                                            <div className={`availability-badge ${room.is_available ? 'available' : 'unavailable'}`}>
                                                {room.is_available ? `${room.available_units} Available` : 'Not Available'}
                                            </div>
                                        </div>
                                        <div className="room-price">₹{room.rent} <span>/month</span></div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ) : (
                        <section className="rent-section">
                            <h2>Rent Information</h2>
                            <div className="rent-card">
                                <div className="rent-header">
                                    <h3>Monthly Rent</h3>
                                </div>
                                <div className="rent-price">
                                    ₹{accommodation.rent} <span>/month</span>
                                </div>
                                <div className="rent-details">
                                    <p>Includes all basic amenities and utilities</p>
                                </div>
                            </div>
                        </section>
                    )}

                    <section className="location-section">
                        <h2>Location</h2>
                        <div className="address">
                            <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#718096"></path>
                            </svg>
                            <p>{accommodation.address}</p>
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
                            <div className="contact-item">
                                <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#718096"></path>
                                </svg>
                                <span>{accommodation.owner.email}</span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>

    );
};

export default DetailsPage;