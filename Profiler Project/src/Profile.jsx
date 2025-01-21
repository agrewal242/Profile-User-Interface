import React from 'react';
import './index.css'; 
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Profile = ({ profileData }) => {

  console.log('Profile Data:', profileData); 

  // Shows first letter of name on pfp
  const initial = profileData.name.charAt(0).toUpperCase();

  const navigate = useNavigate();

  // click on the profile icon 
  const handleIconClick = () => {
    console.log(`Navigating to profile: ${profileData.name}`);
    navigate(`/profile/${profileData.name}`, { state: { profileData, profileIconData: iconStyle } });
  };

  const formatUsernameAsName = (username) => {
    if (!username) return ''; 

    // Splits the username by hyphens or underscores and capitalize each part.
    return username
      .split(/[-_]/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
      .join(' ');
  };

  // Function to generate random colors for pfp icons
  const getRandomColor = () => {
    const highBaseValue = 200; 
    const colorVariation = 55; 

    const red = highBaseValue + Math.floor(Math.random() * colorVariation);
    const green = highBaseValue + Math.floor(Math.random() * colorVariation);
    const blue = highBaseValue + Math.floor(Math.random() * colorVariation);
    
    return `rgb(${red}, ${green}, ${blue})`;
  };

  // Style for the profile icons
  const iconStyle = {
    backgroundColor: getRandomColor(),
    fontWeight: 'bold',
  };

  // URLs for social media links
  const facebookUrl = `https://facebook.com/${profileData.name}`;
  const linkedinUrl = `https://linkedin.com/in/${profileData.name}`;
  

  // Profile stuff
  return (
    <div className="profile-card">
      {/* Profile icon */}
      <div className="profile-icon" style={iconStyle} onClick={handleIconClick}>
        {initial}
      </div>

      <div className="profile-info">

        <div className="profile-name">{formatUsernameAsName(profileData.name)}</div>
        <div className="profile-username">@{profileData.name}</div>
        
        {/* Facebook & linkedin */}

        <div className="profile-social-links">
          <a href={facebookUrl} className="social-link">
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
          <a href={linkedinUrl} className="social-link">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
