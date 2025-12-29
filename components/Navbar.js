import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          ABYX-Tech
        </Link>

        <div className={styles.menu}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <Link href="/pages/products" className={styles.navLink}>
            Products
          </Link>
          <Link href="/deals" className={styles.navLink}>
            Deals
          </Link>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
          <Link href="/blog" className={styles.navLink}>
            Blog
          </Link>
          <Link href="/contact" className={styles.navLink}>
            Contact
          </Link>
        </div>

        <div className={styles.actions}>
          <Link href="/search" className={styles.actionButton}>
            🔍
          </Link>
          <Link href="/account" className={styles.actionButton}>
            👤
          </Link>
          <Link href="/cart" className={styles.cartButton}>
            🛒
            {cartCount > 0 && (
              <span className={styles.cartCount}>{cartCount}</span>
            )}
          </Link>
        </div>

        <button 
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
        <Link href="/" className={styles.mobileLink}>
          Home
        </Link>
        <Link href="/products" className={styles.mobileLink}>
          Products
        </Link>
        <Link href="/deals" className={styles.mobileLink}>
          Deals
        </Link>
        <Link href="/about" className={styles.mobileLink}>
          About
        </Link>
        <Link href="/blog" className={styles.mobileLink}>
          Blog
        </Link>
        <Link href="/contact" className={styles.mobileLink}>
          Contact
        </Link>
        <div className={styles.mobileActions}>
          <Link href="/search" className={styles.mobileActionLink}>
            Search
          </Link>
          <Link href="/account" className={styles.mobileActionLink}>
            My Account
          </Link>
          <Link href="/cart" className={styles.mobileActionLink}>
            Cart ({cartCount})
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;