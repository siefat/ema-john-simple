
import {getStoredCart} from '../utilities/fakedb'
import { useState, useEffect } from 'react';
const UseCart =products =>{
    const [cart, setCart]= useState([]);
useEffect(()=>{
    if(products.length){
        const savedCart = getStoredCart();
        const storedCart =[];
        for(const key in savedCart){
            const addProduct = products.find(product => product.key ===key );
            if(addProduct){
                const quantity = savedCart[key];
                addProduct.quantity= quantity;
                storedCart.push(addProduct);
            }
        }
        setCart(storedCart);
    }
    
}
,[products])
return [cart, setCart]
}

export default UseCart;