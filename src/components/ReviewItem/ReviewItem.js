import React from 'react';

const ReviewItem = (props) => {
    // console.log(props.Product)
const {name , price, quantity,key}= props.Product;
const {handleRemove} = props;
   
    return (
        <div className='product'>
           <div>
           <h4 className='product-name'>{name}</h4>
             <p>Price:${price}</p>
            <p>Quantity:{quantity}</p>
            <button 
            onClick={()=> handleRemove(key)}
            className='btn-regular'>remove</button>
           </div>
        </div>
    );
};

export default ReviewItem;