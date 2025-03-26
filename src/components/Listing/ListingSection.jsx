import React, { useState, useEffect } from 'react';
import './listingSection.css';

const ListingSection = () => {
    const [showAddForm, setShowAddForm] = useState(false);
    const [colleges, setColleges] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        type: '',
        description: '',
        college_id: '',
        distance_km: '',
        district: '',
        contact: '',
        address: '',
        roomTypes: [{ room_type_name: '', rent: '', available_units: 1, is_available: true }]
    });
    
    // Simulate fetching colleges from your API
    useEffect(() => {
        // Replace with actual API call
        const fetchColleges = async () => {
            // Mockup data
            const mockColleges = [
                { college_id: 1, college_name: 'University of Technology' },
                { college_id: 2, college_name: 'City College' },
                { college_id: 3, college_name: 'Medical University' },
                { college_id: 4, college_name: 'Engineering Institute' }
            ];
            setColleges(mockColleges);
        };
        
        fetchColleges();
    }, []);
    
    const toggleAddForm = () => {
        setShowAddForm(!showAddForm);
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    
    const handleRoomTypeChange = (index, e) => {
        const { name, value } = e.target;
        const updatedRoomTypes = [...formData.roomTypes];
        updatedRoomTypes[index] = {
            ...updatedRoomTypes[index],
            [name]: value
        };
        
        setFormData({
            ...formData,
            roomTypes: updatedRoomTypes
        });
    };
    
    const addRoomType = () => {
        setFormData({
            ...formData,
            roomTypes: [...formData.roomTypes, { room_type_name: '', rent: '', available_units: 1, is_available: true }]
        });
    };
    
    const removeRoomType = (index) => {
        const updatedRoomTypes = [...formData.roomTypes];
        updatedRoomTypes.splice(index, 1);
        setFormData({
            ...formData,
            roomTypes: updatedRoomTypes
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted with data:', formData);
        // Here you would send the data to your backend API
        alert('Property submitted successfully!');
        setShowAddForm(false);
        setFormData({
            name: '',
            type: '',
            description: '',
            college_id: '',
            distance_km: '',
            district: '',
            contact: '',
            address: '',
            roomTypes: [{ room_type_name: '', rent: '', available_units: 1, is_available: true }]
        });
    };
    
    return (
        <section className="listing-section" id="listing">
            <div className="listing-container">
                <div className="listing-content">
                    <h2>List Your Accommodation</h2>
                    <p className="listing-description">
                        Join hundreds of property owners who list their accommodations near colleges.
                        Our platform makes it easy to showcase your property to thousands of students.
                    </p>
                    
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <div className="benefit-icon visibility-icon"></div>
                            <h3>College-Specific</h3>
                            <p>Target students from specific colleges who need accommodations</p>
                        </div>
                        
                        <div className="benefit-card">
                            <div className="benefit-icon support-icon"></div>
                            <h3>24/7 Support</h3>
                            <p>Our dedicated team is always ready to assist you</p>
                        </div>
                        
                        <div className="benefit-card">
                            <div className="benefit-icon verified-icon"></div>
                            <h3>Verified Students</h3>
                            <p>We verify student details to ensure quality tenants</p>
                        </div>
                        
                        <div className="benefit-card">
                            <div className="benefit-icon tools-icon"></div>
                            <h3>Owner Dashboard</h3>
                            <p>Manage your listings, track inquiries, and update availability</p>
                        </div>
                    </div>
                    
                    <button className="primary-button add-property-btn" onClick={toggleAddForm}>
                        Add Your Accommodation
                    </button>
                    
                    {showAddForm && (
                        <div className="add-property-form">
                            <h3>Add New Accommodation</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Accommodation Name</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="e.g. Sunshine Hostel" 
                                        required 
                                    />
                                </div>
                                
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="type">Accommodation Type</label>
                                        <select 
                                            id="type" 
                                            name="type" 
                                            value={formData.type}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select Type</option>
                                            <option value="hostel">Hostel</option>
                                            <option value="pg">PG</option>
                                            <option value="apartment">Apartment</option>
                                            <option value="flat">Flat</option>
                                            <option value="room">Single Room</option>
                                        </select>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="college_id">Nearest College</label>
                                        <select 
                                            id="college_id" 
                                            name="college_id" 
                                            value={formData.college_id}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select College</option>
                                            {colleges.map(college => (
                                                <option key={college.college_id} value={college.college_id}>
                                                    {college.college_name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="district">District</label>
                                        <input 
                                            type="text" 
                                            id="district" 
                                            name="district" 
                                            value={formData.district}
                                            onChange={handleChange}
                                            placeholder="e.g. Central District" 
                                            required 
                                        />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="distance_km">Distance from College (km)</label>
                                        <input 
                                            type="number" 
                                            id="distance_km" 
                                            name="distance_km" 
                                            value={formData.distance_km}
                                            onChange={handleChange}
                                            step="0.1" 
                                            min="0" 
                                            placeholder="1.5" 
                                            required 
                                        />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="contact">Contact Number</label>
                                        <input 
                                            type="tel" 
                                            id="contact" 
                                            name="contact" 
                                            value={formData.contact}
                                            onChange={handleChange}
                                            placeholder="Your phone number" 
                                            required 
                                        />
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="address">Full Address</label>
                                    <input 
                                        type="text" 
                                        id="address" 
                                        name="address" 
                                        value={formData.address}
                                        onChange={handleChange}
                                        placeholder="Complete address with landmark" 
                                        required 
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <textarea 
                                        id="description" 
                                        name="description" 
                                        value={formData.description}
                                        onChange={handleChange}
                                        rows="4" 
                                        placeholder="Describe your accommodation with amenities and facilities..."
                                        required
                                    ></textarea>
                                </div>
                                
                                <div className="room-types-section">
                                    <div className="room-types-header">
                                        <h4>Room Types</h4>
                                        <button type="button" className="add-room-btn" onClick={addRoomType}>+ Add Room Type</button>
                                    </div>
                                    
                                    {formData.roomTypes.map((roomType, index) => (
                                        <div key={index} className="room-type-container">
                                            <h5>Room Type {index + 1}</h5>
                                            <div className="form-row">
                                                <div className="form-group">
                                                    <label htmlFor={`roomType-${index}`}>Room Type Name</label>
                                                    <input 
                                                        type="text" 
                                                        id={`roomType-${index}`} 
                                                        name="room_type_name" 
                                                        value={roomType.room_type_name}
                                                        onChange={(e) => handleRoomTypeChange(index, e)}
                                                        placeholder="e.g. Single Room, Double Sharing" 
                                                        required 
                                                    />
                                                </div>
                                                
                                                <div className="form-group">
                                                    <label htmlFor={`rent-${index}`}>Monthly Rent (₹)</label>
                                                    <input 
                                                        type="number" 
                                                        id={`rent-${index}`} 
                                                        name="rent" 
                                                        value={roomType.rent}
                                                        onChange={(e) => handleRoomTypeChange(index, e)}
                                                        min="0" 
                                                        placeholder="5000" 
                                                        required 
                                                    />
                                                </div>
                                                
                                                <div className="form-group">
                                                    <label htmlFor={`units-${index}`}>Available Units</label>
                                                    <input 
                                                        type="number" 
                                                        id={`units-${index}`} 
                                                        name="available_units" 
                                                        value={roomType.available_units}
                                                        onChange={(e) => handleRoomTypeChange(index, e)}
                                                        min="1" 
                                                        placeholder="1" 
                                                        required 
                                                    />
                                                </div>
                                                
                                                {index > 0 && (
                                                    <button 
                                                        type="button" 
                                                        className="remove-room-btn"
                                                        onClick={() => removeRoomType(index)}
                                                    >
                                                        Remove
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="photos">Upload Photos</label>
                                    <input type="file" id="photos" multiple />
                                    <p className="photo-hint">Upload multiple photos of your property (exterior, rooms, facilities)</p>
                                </div>
                                
                                <div className="form-actions">
                                    <button type="button" className="cancel-btn" onClick={toggleAddForm}>Cancel</button>
                                    <button type="submit" className="primary-button">Submit Accommodation</button>
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