import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <h2>Rentora</h2>
                    <p>Your trusted rental platform</p>
                </div>
                <div className="footer-links">
                    <div className="footer-column">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#rental">Rentals</a></li>
                            <li><a href="#list">List Property</a></li>
                            <li><a href="#about">About Us</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Resources</h3>
                        <ul>
                            <li><a href="/rental-guide">Rental Guide</a></li>
                            <li><a href="/faq">FAQ</a></li>
                            <li><a href="/privacy-policy">Privacy Policy</a></li>
                            <li><a href="/terms-of-service">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Contact</h3>
                        <ul>
                            <li><i className="fas fa-envelope"></i> contact@rentora.com</li>
                            <li><i className="fas fa-phone"></i> +1 (555) 123-4567</li>
                            <li><i className="fas fa-map-marker-alt"></i> 123 Main St, City, Country</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Rentora. All rights reserved.</p>
                <div className="social-icons">
                    <a href="https://facebook.com/youraccount" aria-label="Facebook">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com/youraccount" aria-label="Twitter">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://instagram.com/youraccount" aria-label="Instagram">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://linkedin.com/youraccount" aria-label="LinkedIn">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;