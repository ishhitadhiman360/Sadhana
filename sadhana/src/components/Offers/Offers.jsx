import React from 'react'
import './Offers.css'
import Quotes from '../Assets/Quotes.png'
import MeditationQuotes from './MeditationQuotes'
const Offers=()=>{
    return(
        <div className='offers'>
          <div className='quote'>
            <MeditationQuotes/>   
          </div>
          <div className='quote-image'>
            <img src={Quotes} alt=""/>
          </div>
        </div>
    )
}

export default Offers;
