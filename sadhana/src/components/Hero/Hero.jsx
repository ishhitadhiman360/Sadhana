import React from 'react';
import './Hero.css';
import homemeditation from '../Assets/home-meditation.png';
import MeditationQuotes from '../Offers/MeditationQuotes';

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-left'>
                <MeditationQuotes />
            </div>
            <div className='hero-right'>
                <img src={homemeditation} alt='' />
            </div>
        </div>
    );
};

export default Hero;
