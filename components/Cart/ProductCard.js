"use client"

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function Product({ product, disabled, image }) {
    const { addToCart } = useCart();
    const router = useRouter();

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div className="card">
            <div className="card-title">{product.name}</div>
            <div className="card-text">{product.price}</div>
            <button className="card-btn" onClick={handleAddToCart} disabled={disabled}>
            Add to Cart
            </button>
        </div>
    );
}