"use client"

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function Product({ product, disabled }) {
    const { addToCart } = useCart();
    const router = useRouter();

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div style={{ border: "1px solid #ccc ", padding: 10, margin: 10 }}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={handleAddToCart} disabled={disabled}>
            Add to Cart
            </button>
        </div>
    );
}