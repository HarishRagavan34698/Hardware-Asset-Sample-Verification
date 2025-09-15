import React, { useEffect, useState } from 'react';
import '../styles/AssetDetails.css';
import uploadIcon from '../assets/svg/upload.svg';
import viewIcon from '../assets/svg/view.svg';

const AssetDetails = () => {
  const [assetData, setAssetData] = useState([
    {
      id: 1,
      itemName: "Fixed Asset",
      assetNumber: "2030013255",
      serialNumber: "000123PGZ321549R",
      productName: "Samsung TFT Monitor",
      model: "Samsung B2030N",
      assetStatus: "In Use",
      assetLocation: "Outside off",
      attachment: null
    },
    {
      id: 2,
      itemName: "Laptop",
      assetNumber: "2030013256",
      serialNumber: "000123PGZ321550R",
      productName: "Samsung Galaxy Book Pro",
      model: "NP950XDB-KA1US",
      assetStatus: "Available",
      assetLocation: "Office",
      attachment: null
    },
    {
      id: 3,
      itemName: "Mobile Device",
      assetNumber: "2030013257",
      serialNumber: "000123PGZ321551R",
      productName: "Samsung Galaxy S24",
      model: "SM-S921B",
      assetStatus: "In Use",
      assetLocation: "Lab",
      attachment: null
    }
  ]);

  const [newAsset, setNewAsset] = useState({
    itemName: "",
    assetNumber: "",
    serialNumber: "",
    productName: "",
    model: "",
    assetStatus: "In Use",
    assetLocation: "Outside off"
  });

  const [declaration, setDeclaration] = useState({
    assetCondition: false,
    responsibility: false,
    compliance: false
  });

  const handleInputChange = (e, field) => {
    setNewAsset({
      ...newAsset,
      [field]: e.target.value
    });
  };

  const handleAddAsset = () => {
    if (newAsset.itemName && newAsset.assetNumber && newAsset.serialNumber && 
        newAsset.productName && newAsset.model) {
      setAssetData([...assetData, { ...newAsset, id: assetData.length + 1, attachment: null }]);
      setNewAsset({
        itemName: "",
        assetNumber: "",
        serialNumber: "",
        productName: "",
        model: "",
        assetStatus: "In Use",
        assetLocation: "Outside off"
      });
    }
  };

  const handleFileUpload = (e, assetId) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    setAssetData(prev => prev.map(item => {
      if (item.id !== assetId) return item;
      if (item.attachment && item.attachment.url) {
        try { URL.revokeObjectURL(item.attachment.url); } catch (_) {}
      }
      return {
        ...item,
        attachment: {
          name: file.name,
          type: file.type,
          url: objectUrl
        }
      };
    }));
    // reset input value so same file can be re-selected later
    try { e.target.value = null; } catch (_) {}
  };

  const handleViewAttachment = (attachment) => {
    if (!attachment || !attachment.url) return;
    window.open(attachment.url, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    return () => {
      // cleanup object URLs on unmount
      assetData.forEach(item => {
        if (item.attachment && item.attachment.url) {
          try { URL.revokeObjectURL(item.attachment.url); } catch (_) {}
        }
      });
    };
  }, []);

  const handleDeclarationChange = (field) => {
    setDeclaration({
      ...declaration,
      [field]: !declaration[field]
    });
  };

  return (

    
    <div className="asset-details-container">
    

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
              <th>Attach Barcode Image<br /><span className="file-types">(JPG, PNG, GIF/PDF)</span></th>
              <th>View Image</th>
            </tr>
          </thead>
          <tbody>
            {assetData.map((asset) => (
              <tr key={asset.id} className="table-row">
                <td>{asset.itemName}</td>
                <td>{asset.assetNumber}</td>
                <td>{asset.serialNumber}</td>
                <td>{asset.productName}</td>
                <td>{asset.model}</td>
                <td>
                  <select 
                    className="status-dropdown"
                    value={asset.assetStatus}
                    onChange={(e) => {
                      const updatedData = assetData.map(item => 
                        item.id === asset.id ? { ...item, assetStatus: e.target.value } : item
                      );
                      setAssetData(updatedData);
                    }}
                  >
                    <option value="In Use">In Use</option>
                    <option value="Available">Available</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Retired">Retired</option>
                  </select>
                </td>
                <td>
                  <select 
                    className="location-dropdown"
                    value={asset.assetLocation}
                    onChange={(e) => {
                      const updatedData = assetData.map(item => 
                        item.id === asset.id ? { ...item, assetLocation: e.target.value } : item
                      );
                      setAssetData(updatedData);
                    }}
                  >
                    <option value="Outside off">Outside off</option>
                    <option value="Office">Office</option>
                    <option value="Warehouse">Warehouse</option>
                    <option value="Lab">Lab</option>
                  </select>
                </td>
                <td>
                  <label className="upload-button">
                    <input 
                      type="file" 
                      accept=".png,.jpg,.jpeg,.gif,.pdf"
                      onChange={(e) => handleFileUpload(e, asset.id)}
                      style={{ display: 'none' }}
                    />
                    <span className="upload-icon" title={asset.attachment ? asset.attachment.name : 'Upload file'}>
                      <img src={uploadIcon} alt="Upload" />
                    </span>
                  </label>
                </td>
                <td>
                  <button 
                    className="view-image-button"
                    onClick={() => handleViewAttachment(asset.attachment)}
                    disabled={!asset.attachment}
                    title={asset.attachment ? `View ${asset.attachment.name}` : 'No file attached'}
                  >
                    <span className="view-icon"><img src={viewIcon} alt="View" /></span>
                  </button>
                </td>
              </tr>
            ))}
            
            {/* Add new asset row */}
            <tr className="add-asset-row">
              <td>
                <input 
                  type="text" 
                  placeholder="Item Name"
                  value={newAsset.itemName}
                  onChange={(e) => handleInputChange(e, 'itemName')}
                  className="input-field"
                />
              </td>
              <td>
                <input 
                  type="text" 
                  placeholder="Asset/Sample No"
                  value={newAsset.assetNumber}
                  onChange={(e) => handleInputChange(e, 'assetNumber')}
                  className="input-field"
                />
              </td>
              <td>
                <input 
                  type="text" 
                  placeholder="Serial Number"
                  value={newAsset.serialNumber}
                  onChange={(e) => handleInputChange(e, 'serialNumber')}
                  className="input-field"
                />
              </td>
              <td>
                <input 
                  type="text" 
                  placeholder="Product Name"
                  value={newAsset.productName}
                  onChange={(e) => handleInputChange(e, 'productName')}
                  className="input-field"
                />
              </td>
              <td>
                <input 
                  type="text" 
                  placeholder="Model"
                  value={newAsset.model}
                  onChange={(e) => handleInputChange(e, 'model')}
                  className="input-field"
                />
              </td>
              <td>
                <select 
                  className="status-dropdown"
                  value={newAsset.assetStatus}
                  onChange={(e) => handleInputChange(e, 'assetStatus')}
                >
                  <option value="In Use">In Use</option>
                  <option value="Available">Available</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="Retired">Retired</option>
                </select>
              </td>
              <td>
                <select 
                  className="location-dropdown"
                  value={newAsset.assetLocation}
                  onChange={(e) => handleInputChange(e, 'assetLocation')}
                >
                  <option value="Outside off">Outside off</option>
                  <option value="Office">Office</option>
                  <option value="Warehouse">Warehouse</option>
                  <option value="Lab">Lab</option>
                </select>
              </td>
              <td>
                <button className="add-asset-button" onClick={handleAddAsset}>
                  Add Asset
                </button>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Employee Self Declaration Section */}
      <div className="declaration-section">
        <h3 className="declaration-title">Employee Self Declaration</h3>
        <div className="declaration-content">
          <div className="declaration-item">
            <label className="declaration-checkbox">
              <input
                type="checkbox"
                checked={declaration.assetCondition}
                onChange={() => handleDeclarationChange('assetCondition')}
              />
              <span className="checkmark"></span>
              <span className="declaration-text">
                I hereby conform that all the above assests/samples are physically available and are in my custody either at office or my home.
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetDetails;
