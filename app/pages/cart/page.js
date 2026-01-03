"use client"
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import CartItem from "@/components/Cart/CartItem";

export default function CartPage() {
    const { cart } = useCart();

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
    );

    if (cart.length === 0) {
        return (
            <h2>Your cart is empty</h2>
        )
    }
    return (
        <div>
            <h1>Your Cart</h1>
            {cart.map((item) => (
                <CartItem key={item.id} item={item}/>
            ))}

            <h2>Total: ${total}</h2>

            <Link href={"/pages/checkout"}>
                <button className="card-btn" >Proceed to Checkout</button>
            </Link>
        </div>
    );
}