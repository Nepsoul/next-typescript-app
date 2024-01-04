"use client" //to convert entire component/event handler into client component
import React from 'react'

const AddtoCart = () => {
  return (
    <div>
        <button className='btn btn-primary' onClick={()=>{console.log("click")}}>Add to Cart</button>
    </div>
  )
}

export default AddtoCart;