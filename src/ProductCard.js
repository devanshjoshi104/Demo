import React, { Component } from 'react'
import './Card.css';
import IMG from './Assets/yoshiko-evanka-6rvanRNA2Jc-unsplash.jpg'
import Select from 'react-select'
import Rating from './Rating'
export default function ProductCard(Props) {
    const [size, setSize] = React.useState();
    const [Price, setPrice] = React.useState("0");
  
  
    const handleChange=(a)=>{
      // console.log(a);
      setSize(a);
  
     const z=products.map((p) => {
  
     
          if(p.size===a.value){setPrice(p.price);
          // console.log(size+" "+p.size);
        }
        })
        
  
    }
   
    const sizeOptions = products
    .map((p) => p.size)
    .map((size) => ({ label: size, value: size }));
  
        return (
            
            <div className=" Product-box">
            
            
            <h1>{Props.name}</h1>

            <div className=" Product-box-wrapper">
            <div className=" Product-box-size"><h3>Size</h3>
            <Select value={size} onChange={handleChange} options={sizeOptions} />
            </div>
            <div className=" Product-box-price"><h3>Price</h3>
            <h3>Rs {Price}</h3>
            </div>
            </div>
            <div className=" Product-rating">

            <h3>Give Rating</h3>
           
            <Rating/>
            </div>
            </div>
            
        )
    
}
const products = [
    { size: "small", price:"200" },
   
    { size: "medium", price:"300" },
    { size: "large",  price:"400" },
   
  ];

