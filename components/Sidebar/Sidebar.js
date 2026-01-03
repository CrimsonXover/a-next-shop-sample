"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./Sidebar.css"

export default function Sidebar() {
    const [open, setOpen] = useState(true);
    const pathname = usePathname();

    const menuItems = [
        { name: "Home", path: "/" },
        { name: "Product", path: "/products" },
        { name: "Deals", path: "/deals" },
        { name: "About", path: "/about" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" }
    ];

    return (
        <div className={'sidebar ${open ? "open" : "closed"}'}>
            <button className="toggle-btn" onClick={() => setOpen(!open)}>
                &#9776;
            </button>

            <ul>
                {menuItems.map((item) => (
                    <li
                        key={item.path}
                        className={pathname === item.path ? "active" : ""}>
                            <Link href={item.path}>{item.name}</Link>
                        </li>
                ))};
            </ul>
        </div>
    );
}