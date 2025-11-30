import React from "react";
import './Dashboard.css';
import AllIcon from './icons/AllIconColored.svg'
import RadarIcon from './icons/RadarIconColored.svg'
import RadarMaritimeIcon from './icons/RadarMaritimeColoredIcon.svg'
import CameraIcon from './icons/CameraIconColored.svg'
import DataShowIcon from './icons/Data_showIconColored.svg'
import NVRIcon from './icons/DVR-NVRIconColored.svg'
import TVIcon from './icons/TVIconColored.svg'
import OtherIcon from './icons/OtherIconColored.svg'

export default function Dashboard() {

   const categories = [
        { name: 'TOUT', icon: AllIcon, quantity: 12 },
        { name: 'RADAR', icon: RadarIcon, quantity: 12 },
        { name: 'RADAR-MARITIME', icon: RadarMaritimeIcon, quantity: 12 },
        { name: 'CAMERA', icon: CameraIcon, quantity: 12 },
        { name: 'VIDEO PROJECTEUR', icon: DataShowIcon, quantity: 12 },
        { name: 'DVR-NVR', icon: NVRIcon, quantity: 12 },
        { name: 'TV', icon: TVIcon, quantity:12 },
        { name: 'OTHER', icon: OtherIcon, quantity: 12 }
    ];

    const statusDisplay = [
    { label: 'Réparé', color: '#22c55e' },
    { label: 'En cours', color: '#eab308' },
    { label: 'Non réparé', color: '#ef4444' },
    { label: 'Réformé', color: '#6b7280' }
];

  return (
    <div className="main-dashboard">
      <div className="cards-container">
        {categories.map((category,index) => (
          <>
          <div className="category-card">
              <h4>{category.name}</h4>
              <p>{category.quantity}</p>
            <img src={category.icon} alt={category.name} className="card-icon"/>
          </div>
          </>
        ))}
      </div>
      <div className="info-container">
        <div className="recent-activities">
          activities
        </div>
        <div className="status-section">
          <h1 className="summary-title">État des équipements</h1>
          <h2 className="summary-subtitle">État actuel des réparations</h2>
          <div className="status-list">
              {statusDisplay.map((status) => (
                <div key={status.label} className="status-row">
                    <span className="status-dot" style={{ background: status.color }}></span>
                    <span className="status-label">{status.label}</span>
                    <span className="status-count">12 </span>
                </div>
            ))}
        </div>
        </div>
      </div>
    </div>
  );
}
