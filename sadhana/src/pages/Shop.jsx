
import React from 'react'
import Hero from '../components/Hero/Hero';
import Popular from '../components/Popular/Popular';
import Offers from '../components/Offers/Offers'
import NewCollection from '../components/NewColletions/NewCollections';
import NewsLetter from '../components/NewsLetter/NewsLetter';
import Popup from './Popup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Shop=()=>{
    return(
        <div>
          <Popup/>
          <Hero/>  
          <Popular/>
          <Offers/>
          <NewCollection/>
          <NewsLetter/>
        </div>
    )
}

export default Shop;
