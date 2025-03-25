import React from 'react';

const Button = ({ children, onClick, className, type = 'button' }) => {
    return (
        <button className={`primary-button ${className}`} onClick={onClick} type={type}>
            {children}
        </button>
    );
};

export default Button;