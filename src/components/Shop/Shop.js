import React, { useState } from 'react';
import courseData  from '../../fakeData/courseData';
import Product from "../Product/Product"
import './Shop.css'

const Shop = () => {
    const [product,setProduct] =useState(courseData);

   
    return (
        <div className="shop-container">
            {
                product.map((product)=>(<Product product={product}></Product>))
            }
           
            
        </div>
    );
};

export default Shop;