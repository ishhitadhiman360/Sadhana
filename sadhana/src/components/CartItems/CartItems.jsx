import React, { useState } from 'react';
import './CartItems.css';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';
import { useContext } from 'react';

const CartItems = () => {
  const {
    getTotalCartAmount,
    all_product,
    cartItems,
    removeFromCart,
  } = useContext(ShopContext);

  // Declare the promoCode variable
  const promoCode = 'HEALTHYME100';

  // Import and use the useState hook
  const [promoCodeApplied, setPromoCodeApplied] = useState(false);

  const handlePromoCode = () => {
    if (promoCode === 'HEALTHYME100') {
      setPromoCodeApplied(true);
      console.log('Promo code applied successfully');
    } else {
      console.log('Invalid promo code');
    }
  };

  const getTotalCartAmountAfterDiscount = () => {
    if (promoCodeApplied) {
      return getTotalCartAmount() - 100; // Apply the 100 RS discount
    } else {
      return getTotalCartAmount();
    }
  };

  return (
    <div className="cartitems">
      <div className="classitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="classitems-format classitems-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>Rs.{e.new_price}</p>
                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                <p>Rs{e.new_price * cartItems[e.id]}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => removeFromCart(e.id)}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>

          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>Rs.{getTotalCartAmount()}</p>
            </div>
            <hr />

            <div className="cartitems-promocode">
              <p>Promotions</p>
              
              <div className="cartitems-promobox">
                <input type="text" placeholder="Enter promo code" align="center"/>
                <br/>
                <button onClick={handlePromoCode}>Submit</button>
              </div>
            </div>
            <br/>
            <div className="cartitems-total-item">
                
                <hr/>
              <h3>Total:</h3>
              <h3>
                Rs.{getTotalCartAmountAfterDiscount()}
               
              </h3>
            </div>
          </div>

          <button>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
