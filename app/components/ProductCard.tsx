"use client"  //to convert entire component/event handler into client component

import React from "react";

const ProductCard=()=>{
    return (<div>
        <div>ProductCard</div>
        <button onClick={()=>{console.log("click")}}>Add to Cart</button>
        </div>)
}

export default ProductCard;