
import React from 'react';
import useSlideshow from '../../hooks/useSlideshow';
import './slideshow.css';

const Slideshow = () => {
    const { slideIndex, setSlideIndex, nextSlide, prevSlide } = useSlideshow(4);

    // Array of slide images
    const slideImages = [
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
    ];

    return (
        <div className="slideshow-wrapper">
            <div className="slideshow-container">
                <div className="slides-wrapper">
                    <div className="slides" style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
                        {slideImages.map((src, index) => (
                            <div className="slide" key={index}>
                                <img src={src} alt={`Slide ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
                
                <button className="prev" onClick={prevSlide}>&#10094;</button>
                <button className="next" onClick={nextSlide}>&#10095;</button>
            </div>
            
            <div className="dots-container">
                {slideImages.map((_, index) => (
                    <span 
                        className={`dot ${slideIndex === index ? 'active' : ''}`} 
                        onClick={() => setSlideIndex(index)}
                        key={index}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Slideshow;