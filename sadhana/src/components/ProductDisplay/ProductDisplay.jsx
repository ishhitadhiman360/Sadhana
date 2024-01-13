import React, { useState } from 'react';
import { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../context/ShopContext';
import allProduct from '../Assets/all_product'; // Update the path accordingly

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    // State for managing audio
    const [isPlaying, setPlaying] = useState(false);
    let audio;

    const toggleAudio = () => {
        if (audio && !audio.paused) {
            setPlaying(false);
            audio.pause();
        } else {
            setPlaying(true);
            audio.play();
        }
    };

    return (
        <div className='productdisplay'>
            <div className='productdisplay-left'>
                <div className='productdisplay-img-list'></div>
                <div className='productdisplay-img'>
                    <img
                        className="productdisplay-main-img"
                        src={product.image}
                        alt=""
                        onClick={toggleAudio}
                    />
                </div>
            </div>
            <div className='productdisplay-right'>
                <h1>{product.name}</h1>
                <div className='productdisplay-right-stars'>
                    <img src={star_icon} alt=""/>
                    <img src={star_icon} alt=""/>
                    <img src={star_icon} alt=""/>
                    <img src={star_icon} alt=""/>
                    <img src={star_dull_icon} alt=""/>
                    <p>(122)</p>
                </div>
                <div className='productdisplay-right-prices'>
                    <div className='productdisplay-right-price-old'>Rs {product.old_price}</div>
                    <div className='productdisplay-right-price-new'>Rs {product.new_price}</div>
                </div>
                <div className='productdisplay-right-description'></div>
                <div className='productdisplay-right-size'>
                    <div className='productdisplay-right-sizes'>
                    {product.description}
                    </div>  
                </div>
                <button onClick={toggleAudio}>
                    {isPlaying ? 'Pause' : 'Play'}
                </button>
                <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
            </div>
            {/* Audio element with the calm audio source from all_product.js */}
            <audio ref={(element) => (audio = element)} src={product.audio}></audio>
        </div>
    );
};

export default ProductDisplay;
