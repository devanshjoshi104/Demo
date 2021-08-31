import React, { Component } from 'react';
import ProductCard from './ProductCard'
import './App.css';



export default function App() {
  
  return (
    <div className="App">
    <div className="header">
    Our Products</div>

    <div className="Products">
    <ProductCard name="Coffee-A"/>
    <ProductCard name="Coffee-B"/>
    </div>
    
     
    </div>
  );
};