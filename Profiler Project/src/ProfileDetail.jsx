import React from 'react';
import { useLocation } from 'react-router-dom';
import './index.css';

const ProfileDetail = () => {
  const location = useLocation();
  const { profileData, profileIconData } = location.state;

  if (!profileData) {
    return <div>Profile not found</div>;
  }

  const formatUsernameAsName = (username) => {
    if (!username) return '';

    return username
      .split(/[-_]/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="profile-detail">
      <div className="profile-icon" style={profileIconData}>
        {profileData.name.charAt(0).toUpperCase()}
      </div>
      <h2 className='pro-info-name'>{formatUsernameAsName(profileData.name)}</h2>

      <div className="profile-info">

        <h3>Age</h3>
        <p>{profileData.age}</p>

        <h3>Occupation</h3>
        <p>{profileData.occupation}</p>

        <h3>Favorite Movie</h3>
        <p>{profileData.fav_movie}</p>
      </div>
    </div>
  );
};

export default ProfileDetail;
