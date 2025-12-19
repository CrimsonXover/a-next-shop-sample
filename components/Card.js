"use client"
import { refresh } from "next/cache";

export default function Card({ title, description, image }) {
    return (
        <div className="card">
            {/* Top image */}
            <div className="card-image" >
                <img src={image} alt={title} />
            </div>

            {/* Content */}
            <div className="card-body">
                <div className="card-title">{title}</div>
                <div className="card-text">{description}</div>
                <button className="card-btn" >Download</button>
            </div>
        </div>
    );
}