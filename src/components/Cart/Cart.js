import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart}= props;

    let totalQuantity= 0;
    let total= 0;
    for(const product of cart){
      if(!product.quantity){
          product.quantity =1;
      }
        total =total + product.price * product.quantity ;
        totalQuantity = totalQuantity + product.quantity;
    }
    let shipping= 0;
   
    if(cart.length > 0){
        shipping = 15 ;
    }
    // const shipping = 15 ;
    const text =(total + shipping) / 10;
const grandTotal = total + shipping + text;
    return (
        <div className='cart-container'>
            <h3>Order Summary</h3>
       <h5>Item Ordered :{totalQuantity}</h5>
       <br/>
       <p>Total :${total.toFixed(2)}</p>
       <p>Shipping :${shipping.toFixed(2)}</p>
       <p>Tax :${text.toFixed(2)}</p>
       <h3 className='order-Total'>Order total :${grandTotal.toFixed(2)}</h3>
{props.children}
</div>
    );
};

export default Cart;