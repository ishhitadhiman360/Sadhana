// Button.js
import React from 'react';

const Button = ({ text, onClick }) => {
    return (
        <button className='descriptionbox-button' onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
