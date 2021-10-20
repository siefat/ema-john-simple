import React from 'react';
import useProducts from '../../hooks/useProducts';
import UseCart from '../../hooks/UseCart';
import Cart from '../Cart/Cart'
import ReviewItem from '../ReviewItem/ReviewItem';
import Product from './../Product/Product';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router';

const OrderReview = () => {
    const [products]= useProducts([]);
    const [cart, setCart]= UseCart(products);
    const history =useHistory();
    const handleRemove = key =>{
        const newCart = cart.filter(product => product.key !== key);
    setCart(newCart);
    removeFromDb(key);
    }


    const handlePlaceOrder= () =>{
history.push('/placeorder')
setCart([]);
clearTheCart()
    }

    return (
        <div className='shope-container'>
         <div className='product-container'>
{
    cart.map(product => <ReviewItem
    handleRemove={handleRemove}
    key={Product.key}
    Product={product}></ReviewItem>)
} 
         </div>
         <div className='cart-container'>
             <Cart cart={cart}>
                 <button onClick={handlePlaceOrder} className='btn-regular'>Place Order</button>
             </Cart>
         </div>
        </div>
    );
};

export default OrderReview;