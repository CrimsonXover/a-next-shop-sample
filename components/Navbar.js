import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <Link href="/">Home</Link> |{" "}
            <Link href="/about">About</Link> |{" "}
            <Link href="/blog">Blog</Link> |{" "}
            <Link href="/cart">Cart</Link>
        </nav>
    );
}