"use client"

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation"

export default function CheckoutPage() {
    const { cart, clearCart } = useCart();
    const router = useRouter();

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
    );

    const handleCheckout = () => {
        alert("Order placed successfully");
        clearCart();
        router.push("/");
    };

    return (
        <div>
            <h1>Checkout</h1>
            {cart.map((item) => (
                <p key={item.id}>
                    {item.name} * {item.quantity}
                </p>
            ))}

            <h2>Total: ${total}</h2>

            <button onClick={handleCheckout}>
                Place Order
            </button>
        </div>
    );
}