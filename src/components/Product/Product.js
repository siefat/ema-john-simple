import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    const  {img, name, price, stock, seller, star } =props.product
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className= 'product'>
            <img src={img} alt="" />
          <div className='product-detail'>
              <h3 className='product-name'>{name}</h3>
              <p>By: {seller}</p>
               <h4><span className="dollar">$</span>{price}</h4>
              <p>Only {stock} left in stock- Order soon</p>

<Rating
initialRating={star}
  emptySymbol="far fa-star icon-color"
  fullSymbol="fas fa-star icon-color"
readonly></Rating>
<br/>
<button 
onClick={() => props.handleAddToCart(props.product)}
className='btn-regular'><span className='btn-text'>{element}Add To Cart</span></button>
          </div>
        </div>
    );
};

export default Product;