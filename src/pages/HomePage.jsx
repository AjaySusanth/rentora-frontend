import React, { useEffect, useState } from 'react';
import Hero from '../components/Home/Hero';
import ListingSection from '../components/Listing/ListingSection';
import AboutSection from '../components/About/AboutSection';
import { useAuth } from '../utils/AuthContext';

const HomePage = () => {
    const {user,loading:authLoading} = useAuth()
    const [loading,setLoading] = useState(true)
  
    useEffect(()=>{
      if(!authLoading)
        setLoading(false)
    },[authLoading])
    console.log(user)
  
    if (loading) return <p>Loading</p>

    return (
        <div className="home-page">
            <Hero />
            <ListingSection id="listing" /> {/* This now has id="listing" */}
            <AboutSection id="about" /> {/* This should have id="about" */}
        </div>
    );
};

export default HomePage;