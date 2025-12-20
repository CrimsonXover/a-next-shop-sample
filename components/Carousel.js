"use client"

import { useState, useEffect } from "react";
import "./carousel.css";

const Carousel = ({ items, autoSlide = false, autoSlideInterval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    //next slide
    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev === items.length - 1 ? 0 : prev + 1
        );
    };

    //previous slide
    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? items.length - 1 : prev - 1
        );
    };

    //auto slide
    useEffect(() => {
        if (!autoSlide) return;

        const slideInterval = setInterval(nextSlide, autoSlideInterval);

        return () => clearInterval(slideInterval);
    }, [currentIndex]);

    return (
        <div className="carousel-container">
            <button className="nav-button left" onClick={prevSlide}>
                &lt;
            </button>

            <div className="carousel-content">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${
                            index === currentIndex ? "active" : ""}`}>
                        {item}
                    </div>
                ))}
            </div>

            <button className="nav-button right" onClick={nextSlide}>
                &gt;
            </button>
        </div>
    );
};

export default Carousel;