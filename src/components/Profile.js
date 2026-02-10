import React from 'react';

// Profile component to display user information
function Profile({ userData }) {
  const handleContactClick = () => {
    alert(`Contact ${userData.name} at ${userData.email}`);
  };

  return (
    <div className="profile-section">
      <h2 className="section-title">Profile</h2>
      <div className="profile-content">
        <img 
          src={userData.image} 
          alt="Profile" 
          className="profile-pic"
        />
        <div className="profile-info">
          <h3 className="user-name">{userData.name}</h3>
          <p className="bio">{userData.bio}</p>
          <div className="contact-details">
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>Phone:</strong> {userData.phone}</p>
          </div>
          <button className="contact-btn" onClick={handleContactClick}>
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
