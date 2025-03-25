import { useState, useEffect, useCallback } from 'react';

const useSlideshow = (slidesCount = 4) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // Wrap functions in useCallback to prevent recreation on each render
    const nextSlide = useCallback(() => {
        if (isAnimating) return;
        
        setIsAnimating(true);
        setSlideIndex((prevIndex) => 
            prevIndex === slidesCount - 1 ? 0 : prevIndex + 1
        );
        
        setTimeout(() => {
            setIsAnimating(false);
        }, 500);
    }, [isAnimating, slidesCount]);

    const prevSlide = useCallback(() => {
        if (isAnimating) return;
        
        setIsAnimating(true);
        setSlideIndex((prevIndex) => 
            prevIndex === 0 ? slidesCount - 1 : prevIndex - 1
        );
        
        setTimeout(() => {
            setIsAnimating(false);
        }, 500);
    }, [isAnimating, slidesCount]);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        
        return () => clearInterval(interval);
    }, [nextSlide]); 

    return { slideIndex, setSlideIndex, nextSlide, prevSlide, isAnimating };
};

export default useSlideshow;