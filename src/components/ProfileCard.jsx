import React from 'react';
import '../styles/ProfileCard.css';
import Arrow from '../assets/svg/Arrow.svg';

// The Header component for navigation and weekly activities title.
const Header = () => (
  <div className="header-container">
    {/* My Workspace link, now directly aligned to the left */}
    <a href="#" className="workspace-link">My Workspace &gt; Hardware Asset/Sample Verification</a>
    
    {/* The main title and status, aligned to the left */}
    <div className="title-container">
      <button className="left-arrow-btn">
        <img src={Arrow} />
      </button>
      <h1 className="main-title"> Hardware Asset/Sample Verification</h1>
      <span className="status-text"> - Verification by Employee</span>
    </div>
  </div>
);

// The ProfileCard component displays user information in a clean, responsive layout.
// It's designed to accept user data as props.
const ProfileCard = ({ profileData }) => {
  // A safety check to ensure profileData is not null or undefined.
  // This prevents the application from crashing if data isn't loaded yet.
  if (!profileData) {
    return null;
  }
  
  // Destructure the profileData object for easier access to properties.
  const {
    name,
    genId,
    email,
    designation,
    division,
    manager,
    profileImageUrl
  } = profileData;

  return (
    <div className="profile-card">
      {/* Alarm clock icon in top-right corner */}
      <div className="alarm-clock-icon">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4064 18.0314L15.0364 16.0314V11.5014C15.0364 11.1014 14.7164 10.7814 14.3164 10.7814H14.2564C13.8564 10.7814 13.5364 11.1014 13.5364 11.5014V16.2214C13.5364 16.5714 13.7164 16.9014 14.0264 17.0814L17.6764 19.2714C18.0164 19.4714 18.4564 19.3714 18.6564 19.0314C18.8664 18.6814 18.7564 18.2314 18.4064 18.0314ZM23.7164 7.79139L20.6364 5.23139C20.2164 4.88139 19.5864 4.93139 19.2264 5.36139C18.8764 5.78139 18.9364 6.41139 19.3564 6.77139L22.4264 9.33139C22.8464 9.68139 23.4764 9.63139 23.8364 9.20139C24.1964 8.78139 24.1364 8.15139 23.7164 7.79139ZM6.63638 9.33139L9.70638 6.77139C10.1364 6.41139 10.1964 5.78139 9.83638 5.36139C9.48638 4.93139 8.85638 4.88139 8.43638 5.23139L5.35638 7.79139C4.93638 8.15139 4.87638 8.78139 5.23638 9.20139C5.58638 9.63139 6.21638 9.68139 6.63638 9.33139ZM14.5364 6.78139C9.56638 6.78139 5.53638 10.8114 5.53638 15.7814C5.53638 20.7514 9.56638 24.7814 14.5364 24.7814C19.5064 24.7814 23.5364 20.7514 23.5364 15.7814C23.5364 10.8114 19.5064 6.78139 14.5364 6.78139ZM14.5364 22.7814C10.6764 22.7814 7.53638 19.6414 7.53638 15.7814C7.53638 11.9214 10.6764 8.78139 14.5364 8.78139C18.3964 8.78139 21.5364 11.9214 21.5364 15.7814C21.5364 19.6414 18.3964 22.7814 14.5364 22.7814Z" fill="#38AEE0"/>
        </svg>
      </div>

      {/* Container for the profile image and basic contact info */}
      <div className="profile-info-container">
        {/* Profile picture with a circular shape */}
        <div className="profile-image-wrapper">
          <img
            src={profileImageUrl}
            alt="Profile"
            className="profile-image"
          />
          {/* Green active signal */}
          <div className="active-signal"></div>
        </div>
        
        {/* Container for name, ID, and email */}
        <div className="profile-text-content">
         <p className="profile-name-and-id ">
            {name} &bull; Gen ID: <span className="profile-meta-value">{genId}</span>
          </p>
          <p className="profile-meta profile-email">{email}</p>
        </div>
      </div>

      {/* Vertical separator visible only on medium and larger screens */}
      <div className="separator"></div>
      
      {/* Grid container for additional details. It stacks on small screens. */}
      <div className="details-grid">
        {/* Designation section */}
        <div className="detail-section">
          <p className="detail-label">Designation</p>
          <p className="detail-value">{designation}</p>
        </div>

        {/* Division section */}
        <div className="detail-section">
          <p className="detail-label">Division</p>
          <p className="detail-value">
            {division}
          </p>
        </div>

        {/* Manager section - no right border */}
        <div className="detail-section-no-border">
          <p className="detail-label">Manager</p>
          <p className="detail-value">{manager}</p>
        </div>
      </div>
    </div>
  );
};

// The main App component that renders the ProfileCard with sample data.
const App = () => {
  // Sample data to be passed into the ProfileCard component.
  // In a real application, this data would likely come from a state or an API call.
  const sampleProfileData = {
    name: "Manoj Nandan M",
    genId: "25514678",
    email: "Manoj.Nandan@partner.samsung.com",
    designation: "Outsourcing",
    division: "Tech Strategy Team \\ Smart Infra Group \\ Information System & AI Tools",
    manager: "Ravindra S R (98786669)",
    profileImageUrl: "https://placehold.co/200x200/4F46E5/FFFFFF?text=MN", // A placeholder image URL
  };

  return (
    // Main application container with a dark background to match the card's theme.
    // The min-h-screen and flex classes center the content vertically and horizontally.
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Header />
      <ProfileCard profileData={sampleProfileData} />
    </div>
  );
};

export default App;
