import React, { useState, useEffect } from 'react';
import Profile from './Profile';
import './index.css';

let cachedProfiles = null; 

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (cachedProfiles) {
        setProfiles(cachedProfiles); 
        return;
      }

      try {
        const response = await fetch('http://localhost:3338/init');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        cachedProfiles = data; 
        setProfiles(data);
      } catch (error) {
        console.error("Could not fetch profiles:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="profiles-grid">
      {profiles.map((profile, index) => (
        <Profile key={index} profileData={profile} />
      ))}
    </div>
  );
};

export default Profiles;
