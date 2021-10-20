import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shope.css"
// import { useEffect } from 'react;';

const Shope = () => {
    const [products, setProducts]= useState([]);
    const [cart, setCart]= useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
useEffect(()=>{
    fetch('./products.JSON')
    .then(res => res.json())
    .then( data =>{
        setProducts(data);
        setDisplayProducts(data);
    }
    )
},[])
 useEffect(()=>{
     if(products.length){
        const saveCart= getStoredCart();
        const storedCArt= [];
        for (const key in saveCart){
            console.log(key)
          const addedProduct= products.find (product => product.key ===key);
         if(addedProduct){
             const quantity= saveCart[key];
             addedProduct.quantity= quantity
         }
          storedCArt.push(addedProduct)
        }
    setCart(storedCArt)
     }
 }
 ,[products])
// carteventhandler add 
const handleAddToCart=(product) =>{
    const exists = cart.find (pd => pd.key ===product.key);
   let newCart =[];
    if(exists){
const rest = cart.filter(pd => pd.key !==product.key);
exists.quantity= exists.quantity +  1;
newCart = [...rest ,product];
    }
    else{
        product.quantity= 1;
        newCart= [...cart, product];
    }

setCart(newCart);
addToDb(product.key)
}


const handelSearch= event =>{
  const searchText= event.target.value;
  const matchedProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
  setDisplayProducts(matchedProduct);
  console.log(matchedProduct.length)
}

    return (
     <div>
            <div className="search-container">
            <input 
            onChange={handelSearch}
            type="text" placeholder='search product' />
        </div>
        <div className='shope-container'> 
            <div className='product-container'>
{
   displayProducts.map(product => <Product product= {product}
    key={product.key}
    handleAddToCart={handleAddToCart}
    ></Product> )
}
            </div>
            <div className='cart-container'>
<Cart cart={cart}>
<Link to ='/orders'>
    <button className='btn-regular'>Review Your Order</button>
</Link>

</Cart>
            </div>
        </div>
     </div>
    );
};

export default Shope;