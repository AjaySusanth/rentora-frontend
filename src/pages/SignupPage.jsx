import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './auth.css';

const SignupPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false
    });
    
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle signup logic here
        console.log('Signup form submitted:', formData);
    };
    
    return (
        <div className="auth-page">
            <div className="auth-container">
                <div className="auth-form-container">
                    <div className="auth-header">
                        <h1>Create an Account</h1>
                        <p>Join Rentora to find your perfect home</p>
                    </div>
                    
                    <div className="social-auth">
                        <button className="social-btn google-btn">
                            <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                <g transform="matrix(1, 0, 0, 1, 0, 0)">
                                    <path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1Z" fill="#EA4335"></path>
                                </g>
                            </svg>
                            <span>Sign up with Google</span>
                        </button>
                        
                        <button className="social-btn facebook-btn">
                            <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                <g transform="matrix(1, 0, 0, 1, 0, 0)">
                                    <path d="M20.9,2H3.1C2.5,2,2,2.5,2,3.1v17.8C2,21.5,2.5,22,3.1,22h9.6v-7.7h-2.6v-3h2.6V9.2c0-2.6,1.6-4,3.9-4c1.1,0,2.1,0.1,2.3,0.1v2.7h-1.6c-1.3,0-1.5,0.6-1.5,1.5v1.9h3l-0.4,3h-2.6V22h5.1c0.6,0,1.1-0.5,1.1-1.1V3.1C22,2.5,21.5,2,20.9,2z" fill="#1877F2"></path>
                                </g>
                            </svg>
                            <span>Sign up with Facebook</span>
                        </button>
                    </div>
                    
                    <div className="divider">
                        <span>or</span>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="auth-form">
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <div className="input-with-icon">
                                <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12,12c2.21,0,4-1.79,4-4s-1.79-4-4-4s-4,1.79-4,4S9.79,12,12,12z M12,14c-2.67,0-8,1.34-8,4v2h16v-2C20,15.34,14.67,14,12,14z" fill="#718096"></path>
                                </svg>
                                <input 
                                    type="text" 
                                    id="fullName" 
                                    name="fullName" 
                                    value={formData.fullName} 
                                    onChange={handleChange} 
                                    required 
                                    placeholder="John Doe"
                                />
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <div className="input-with-icon">
                                <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,8l-8,5L4,8V6l8,5l8-5V8z" fill="#718096"></path>
                                </svg>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    required 
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <div className="input-with-icon">
                                <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18,8H17V6c0-2.76-2.24-5-5-5S7,3.24,7,6v2H6c-1.1,0-2,0.9-2,2v10c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V10C20,8.9,19.1,8,18,8z M12,17c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S13.1,17,12,17z M15.1,8H8.9V6c0-1.71,1.39-3.1,3.1-3.1s3.1,1.39,3.1,3.1V8z" fill="#718096"></path>
                                </svg>
                                <input 
                                    type="password" 
                                    id="password" 
                                    name="password" 
                                    value={formData.password} 
                                    onChange={handleChange} 
                                    required 
                                    placeholder="Min. 8 characters"
                                />
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <div className="input-with-icon">
                                <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18,8H17V6c0-2.76-2.24-5-5-5S7,3.24,7,6v2H6c-1.1,0-2,0.9-2,2v10c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V10C20,8.9,19.1,8,18,8z M12,17c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S13.1,17,12,17z M15.1,8H8.9V6c0-1.71,1.39-3.1,3.1-3.1s3.1,1.39,3.1,3.1V8z" fill="#718096"></path>
                                </svg>
                                <input 
                                    type="password" 
                                    id="confirmPassword" 
                                    name="confirmPassword" 
                                    value={formData.confirmPassword} 
                                    onChange={handleChange} 
                                    required 
                                    placeholder="Confirm password"
                                />
                            </div>
                        </div>
                        
                        <div className="terms-checkbox">
                            <input 
                                type="checkbox" 
                                id="agreeTerms" 
                                name="agreeTerms" 
                                checked={formData.agreeTerms} 
                                onChange={handleChange} 
                                required 
                            />
                            <label htmlFor="agreeTerms">
                                I agree to the <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>
                            </label>
                        </div>
                        
                        <button type="submit" className="submit-btn">
                            Create Account
                        </button>
                    </form>
                    
                    <div className="auth-footer">
                        <p>Already have an account? <Link to="/login">Log in</Link></p>
                    </div>
                </div>
                
                <div className="auth-image signup-image">
                    <div className="image-overlay"></div>
                    <div className="auth-testimonial">
                        <div className="quote-icon">❝</div>
                        <p className="testimonial-text">
                            As a property owner, Rentora has simplified my rental business. 
                            I found reliable tenants within days of listing!
                        </p>
                        <div className="testimonial-author">
                            <div className="author-avatar owner-avatar"></div>
                            <div className="author-info">
                                <p className="author-name">Michael Chen</p>
                                <p className="author-title">Property Owner</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;