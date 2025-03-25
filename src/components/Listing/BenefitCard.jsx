import React from 'react';

const BenefitCard = ({ icon, title, description }) => {
    return (
        <div className="benefit-card">
            <div className="benefit-icon">
                <i className={icon}></i>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default BenefitCard;