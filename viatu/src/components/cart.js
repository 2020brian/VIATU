import React, { useState } from 'react';
import { useNavigate, NavLink } from "react-router-dom"
import './cart.css';
import CartItem from './CartItem';

function ShoppingCart({ cart, removeFromCart,isLoggedIn }) {
      const calculateTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price, 0);
    };


  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const handleGoBack = () => {
      navigate(-1);
    };
  // const addToCart = (item) => {
  //   const updatedCart = [...cartItems, item];
  //   setCartItems(updatedCart);
  //   calculateTotalPrice(updatedCart);
  // }
  // removeFromCart(state, action) 
  //   state.cartItems.map((cartItem) => {
  //     if (cartItem.id === action.payload.id) {
  //       const nextCartItems = state.cartItems.filter(
  //         (item) => item.id !== cartItem.id
  //       );

  //       state.cartItems = nextCartItems;

  //       toast.error("Product removed from cart", {
  //         position: "bottom-left",
  //       });
  //     }
  //     localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
  //     return state;
  //   })
  // }
  // getTotals(state, action){
  //   let { total, quantity } = state.cartItems.reduce(
  //     (cartTotal, cartItem) => {
  //       const { price, cartQuantity } = cartItem;
  //       const itemTotal = price * cartQuantity;

  //       cartTotal.total += itemTotal;
  //       cartTotal.quantity += cartQuantity;

  //       return cartTotal;
  //     },
  //     {
  //       total: 0,
  //       quantity: 0,
  //     }
  //   );
  //   total = parseFloat(total.toFixed(2));
  //   state.cartTotalQuantity = quantity;
  //   state.cartTotalAmount = total;

  // // function clearCart(state, action) {
  // //   state.cartItems = [];
  // //   localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
  // //   toast.error("Cart cleared", { position: "bottom-left" });
 
  // // };

  // const clearCart = () => {
  //   setCartItems([]);
  //   calculateTotalPrice([]);
  // };

  // const calculateTotalPrice = (cart) => {
  //   const total = cart.reduce((acc, item) => acc + item.price, 0);
  //   setTotalPrice(total);
  // };

  return (

    <div className="shopping-cart">
      <div className="">

      <p id="back" onClick={handleGoBack} style={{fontSize:"30px",position:"absolute", marginLeft:"40px",marginTop:"40px",color:"white"}}>←<span style={{fontSize:"30px"}}>Back</span></p>

        <p className="logo">CART SUMMARY</p>
        <div>
          <i className="fas fa-cart-shopping"></i>
        </div>
      </div>
      
      <div className="container">
      <div className="head">
            <p>My Cart</p>
            
          </div>
          <div className="foot">
            
            <h2 id="total">Total: $ {calculateTotalPrice().toFixed(2)}</h2>
            {
           cart.length === 0 ? null: <NavLink to={isLoggedIn?"/checkout":"/login"} style={{color: "black"}}><h2>Proceed to Checkout</h2></NavLink> 
            }
            
          </div>
        <div className="sidebar">
        
          <div id="cartItem">
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (

              <>
                {cart.map((item, index) => (
                <CartItem key={index} item={item} handleDelete={removeFromCart}/>
                ))}
              </>
            )}
          </div>
          
         
        </div>
      </div>
      
      <div>
     
</div>

     
</div>

  
  );
                }

export default ShoppingCart;