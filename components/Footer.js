import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' },
    { name: 'Support', href: '/support' },
  ];

  const products = [
    { name: 'Smartphones', href: '/smartphones' },
    { name: 'Laptops', href: '/laptops' },
    { name: 'Tablets', href: '/tablets' },
    { name: 'Accessories', href: '/accessories' },
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: 'f' },
    { name: 'X', href: '#', icon: '𝕏' },
    { name: 'Instagram', href: '#', icon: '📷' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h2 className={styles.logo}>ABYX-Tech</h2>
          <p className={styles.description}>
            for all your nerdy needs.
          </p>
        </div>

        <div className={styles.section}>
          <h3 className={styles.heading}>Quick Links</h3>
          <ul className={styles.linkList}>
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className={styles.link}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.heading}>Products</h3>
          <ul className={styles.linkList}>
            {products.map((product, index) => (
              <li key={index}>
                <Link href={product.href} className={styles.link}>
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.heading}>Contact</h3>
          <p className={styles.contactInfo}>Email: ABYX@Gmail.com</p>
          <p className={styles.contactInfo}>Phone: +1 234 567 890</p>
          <div className={styles.socialIcons}>
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.href} 
                className={styles.socialIcon}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.container}>
          <p className={styles.copyright}>
            © 2025 ABYX TEAM. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <Link href="/privacy" className={styles.legalLink}>
              Privacy Policy
            </Link>
            <Link href="/terms" className={styles.legalLink}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
