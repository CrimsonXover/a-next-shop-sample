'use client'

import ProductCard from "../components/ProductCard";
import {useState, useEffect} from 'react';

const products = [
  { id: 1, name: "Laptop", price: 1200, max: 2, disabled: false },
  { id: 2, name: "Headphones", price: 150, max: 1, disabled: false },
  { id: 3, name: "Mouse", price: 50, max: 0, disabled: false }
];

function Home() {
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

// function Home2() {
//   const slides = [
//     <div className="slide slide1">Slide One</div>,
//     <div className="slide slide2">Slide Two</div>,
//     <div className="slide slide3">Slide Three</div>,
//   ];

//   return (
//     <main>
//       <h1>Next.js Carousel</h1>

//       <Carousel
//         items={slides}
//         autoSlide={true}
//         autoSlideInterval={4000}
//       />
//     </main>
//   );
// }

export default Home