// Popup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Popup.css';
import popupimage from '../components/Assets/popupimage.jpeg';

const Popup = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  const closePopup = () => {
    setIsVisible(false);
  };

  const explorePlans = () => {
    closePopup();
    navigate('/plans'); // Replace '/plans' with the actual path to your plans page
  };

  return (
    isVisible && (
      <div className="popup-overlay">
        <div className="popup">
          <span className="close-btn" onClick={closePopup}>
            &times;
          </span>
          <div className="heading">
            <p>Welcome to Sadhana!</p>
          </div>
          <div className="popup-image">
            <img src={popupimage} alt="Popup Image"></img>
          </div>
          <div className="popup-text">
            <p className="small">Last chance</p>
            <p className="discount">45% OFF</p>
          </div>
          <p>
            Unlock the full experience with our premium plans. Start your journey to inner peace today!
          </p>
          <button onClick={explorePlans}>Explore Plans</button>
        </div>
      </div>
    )
  );
};

export default Popup;
