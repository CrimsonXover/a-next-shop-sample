'use client'
import Image from "next/image";
import ProductCard from "../components/ProductCard";
import {useState, useEffect} from 'react'

const products = [
  { id: 1, name: "Laptop", price: 1200, max: 2, disabled: false },
  { id: 2, name: "Headphones", price: 150, max: 1, disabled: false },
  { id: 3, name: "Mouse", price: 50, max: 0, disabled: false }
];

export default function Home() {
      const [cart, setCart] = useState ([]);
  
      useEffect(() => {
          const savedCart = JSON.parse(localStorage.getItem("cart"));
          if (savedCart) setCart(savedCart);
          
      }, []);
  
      useEffect(() => {
          localStorage.setItem("cart", JSON.stringify(cart));
      }, [cart]);
  
  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} disabled={product.disabled} />
      ))}
    </div>
  );
}