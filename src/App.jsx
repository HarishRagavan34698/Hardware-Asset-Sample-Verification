import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import ProfileCard from './components/ProfileCard.jsx';
import './styles/App.css'
import './styles/Arrow.css';
import Navbar from './components/Navbar.jsx';
import AdditionalControls from "./components/AdditionalControls"; 
import RM_Evaluation from './components/Hardware_asset.jsx';
import EmployeeDetails from './components/EmployeeDetails.jsx';
import AssetDetails from './components/AssetDetails.jsx';
import HardwareAssetReport from './components/HardwareAssetReport.jsx';
import clipboardIcon from './assets/svg/clipboard.svg';

// Main form component
function MainForm() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Dashboard", path: "/dashboard" },
    { label: "Profile", path: "/profile" },
    { label: "Settings", path: "/settings" }
  ];

  const Image = ({ src, alt, width, height, style }) => {
    return (
        <img src={src} alt={alt} width={width} height={height} style={style} />
    );
};

  // Sample data for ProfileCard
  const sampleProfileData = {
    name: "Manoj Kandan M",
    genId: "25504878",
    email: "Manoj.kandan@partner.samsung.com",
    designation: "Outsourcing",
    division: "Tech Strategy Team\\Smart Infra Group\\Information System & AI Tools",
    manager: "Ravindra S R (06786669)",
    profileImageUrl: "https://placehold.co/200x200/4F46E5/FFFFFF?text=MK", // A placeholder image URL
  };

  const handleSubmit = () => {
    navigate('/report');
  };

  return (
    <div className="app-container">
      <Navbar 
        logo="My App"
        navItems={navItems}
        onMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
      />

      <div className="main-content">
        <ProfileCard profileData={sampleProfileData} />

        <div className="required-info-section">
          {/* Clipboard SVG icon */}
          <img src={clipboardIcon} alt="Clipboard Icon" />
          

          <span className="required-info-text">Required Information</span>
        </div>

        <div className="content-wrapper">
          <RM_Evaluation>
          <AssetDetails />
            <AdditionalControls onSubmit={handleSubmit} />
          </RM_Evaluation>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainForm />} />
        <Route path="/report" element={<HardwareAssetReport />} />
      </Routes>
    </Router>
  )
}

export default App
