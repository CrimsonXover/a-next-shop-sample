"use client"

import { useCart } from "@/context/CartContext";

export default function CartItem({ item }) {
    const { removeFromCart } = useCart();

    return (
        <div style={{marginBottom: 10 }}>
            <p>
                {item.name} * {item.quantity}
            </p>
            <p>${item.price * item.quantity}</p>
            <button className="card-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
    );
}