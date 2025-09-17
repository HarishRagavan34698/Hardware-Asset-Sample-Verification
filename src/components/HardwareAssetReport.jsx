import React from 'react';
import '../styles/HardwareAssetReport.css';
import { useState } from 'react'
import ProfileCard from './ProfileCard.jsx';
import Navbar from './Navbar.jsx';
import AdditionalControls from "./AdditionalControls"; 
import EmployeeDetails from './EmployeeDetails.jsx';
import AssetDetails from './AssetDetails.jsx';
import clipboardIcon from '../assets/svg/clipboard(2).svg';
import viewIcon from '../assets/svg/view.svg';


const HardwareAssetReport = () => {
  // Sample data for the report
  
  const reportData = {
    employee: {
      name: "Manoj Kandan M",
      genId: "25504878",
      email: "Manoj.kandan@partner.samsung.com",
      designation: "Outsourcing",
      division: "Tech Strategy Team\\Smart Infra Group\\Information System & AI Tools",
      manager: "Ravindra S R (06786669)"
    },
    assets: [
      {
        itemName: "Fixed Asset",
        assetNumber: "2030013255",
        serialNumber: "000123PGZ321549R",
        productName: "Samsung TFT Monitor",
        model: "Samsung B2030N",
        assetStatus: "In Use",
        assetLocation: "Outside off"
      },
      {
        itemName: "Fixed Asset",
        assetNumber: "2030013242",
        serialNumber: "000123PGZ321507X",
        productName: "Samsung Laptop",
        model: "NP370E5L-SO31N",
        assetStatus: "In Use",
        assetLocation: "Outside off"
      },
      {
        itemName: "Fixed Asset",
        assetNumber: "2030013690",
        serialNumber: "000123PGZ321531A",
        productName: "Samsung 27inch LED Mon..",
        model: "LS27R650FDWXXL",
        assetStatus: "In Use",
        assetLocation: "Inside Office"
      }
    ]
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const navItems = [
    { label: "Home", path: "/" },
    { label: "Dashboard", path: "/dashboard" },
    { label: "Profile", path: "/profile" },
    { label: "Settings", path: "/settings" }
  ];

  const sampleProfileData = {
    name: "Manoj Kandan M",
    genId: "25504878",
    email: "Manoj.kandan@partner.samsung.com",
    designation: "Outsourcing",
    division: "Tech Strategy Team\\Smart Infra Group\\Information System & AI Tools",
    manager: "Ravindra S R (06786669)",
    profileImageUrl: "https://placehold.co/200x200/4F46E5/FFFFFF?text=MK", // A placeholder image URL
  };



  return (
    <div className="app-container">
      {/* Header */}
      <Navbar 
  logo="My App"
  navItems={navItems}
  onMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
/>

<ProfileCard profileData={sampleProfileData} />

      {/* Required Information Section */}
      <div className="required-info-section">
  <img 
    src={clipboardIcon} 
    alt="Clipboard Icon" 
    style={{ width: "24px", height: "24px" }} 
  />
  <span className="required-info-text">Required Information</span>
</div>


      {/* Asset Details Table */}
      <div className="box">
      <div className="asset-table-container">
        <table className="asset-table">
          <thead>
            <tr className="table-header">
              <th>Item Name</th>
              <th>Asset/Sample No</th>
              <th>Serial Number</th>
              <th>Product Name</th>
              <th>Model</th>
              <th>Asset Status</th>
              <th>Asset Location</th>
              <th>View Image</th>
            </tr>
          </thead>
          <tbody>
            {reportData.assets.map((asset, index) => (
              <tr key={index} className="table-row">
                <td>{asset.itemName}</td>
                <td>{asset.assetNumber}</td>
                <td>{asset.serialNumber}</td>
                <td>{asset.productName}</td>
                <td>{asset.model}</td>
                <td>
                  <span className={`status-badge ${asset.assetStatus.toLowerCase().replace(' ', '-')}`}>
                    {asset.assetStatus}
                  </span>
                </td>
                <td>
                  <span className={`location-badge ${asset.assetLocation.toLowerCase().replace(' ', '-')}`}>
                    {asset.assetLocation}
                  </span>
                </td>
                <td>
                  <button className="view-image-btn">
                    <span className="camera-icon"><img src={viewIcon} alt="View" /></span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Employee Self Declaration */}
      <div className="declaration-section">
        <h3 className="declaration-title">Employee Self Declaration</h3>
        <div className="declaration-content">
          <label className="declaration-checkbox">
            <input type="checkbox" defaultChecked />
            <span className="checkmark"></span>
            <span className="declaration-text">
              I hereby confirm that all the above assets/samples are physically available and are in my custody either at office or my home.
            </span>
          </label>
        </div>
      </div>

      {/* View Policies Link */}
      <div className="policies-section">
        <a href="#" className="policies-link">
          <span className="policies-icon">📄</span>
          <span>View Policies</span>
        </a>
      </div>
      </div>
    </div>
  );
};

export default HardwareAssetReport;
