import React from 'react';
import Product from './Product.js';

export default function ProductList(props) {
    return (
        props.ProductList.length > 0 ?
        props.ProductList.map((product,i)=>{
             return <Product product={product} key={i} incrementQuantity={props.incrementQuantity} index={i} decrementQuantity={props.decrementQuantity} removeItem={props.removeItem}/>
        })
        : <h1>No Products Exists in the Cart</h1>
    )    
} 
