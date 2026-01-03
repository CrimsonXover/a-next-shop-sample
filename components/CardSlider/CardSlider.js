"use client";

import { useRef } from "react";
import Card from "./Card";
import styles from "./CardSlider.module.css";

export default function CardSlider() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    const card = sliderRef.current.querySelector(".card");
    if (!card) return;

    const cardWidth = card.offsetWidth + 12; // card + gap

    sliderRef.current.scrollBy({
      left: direction * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.outerBox}>
      <div className={styles.innerBox}>
        {/* Cards */}
        <div className={styles.sliderWrapper}>
          <button
            className={`${styles.arrow} ${styles.left}`}
            onClick={() => scroll(-1)}
          >
            ‹
          </button>

          <div ref={sliderRef} className={styles.slider}>
            {[...Array(7)].map((_, i) => (
              <Card key={i} />
            ))}
          </div>

          <button
            className={`${styles.arrow} ${styles.right}`}
            onClick={() => scroll(1)}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}