// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.navLinks}>
        <Link href="/" style={styles.link}>Home</Link>
        <Link href="/products" style={styles.link}>Products</Link>
        <Link href="/blog" style={styles.link}>Blog</Link>
        <Link href="/admin" style={styles.link}>Admin Panel</Link>
      </div>
      <div style={styles.socialLinks}>
        <Link href="/social-media">Social Media</Link>
        {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>Instagram</a> */}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#0070f3',
    color: 'white',
  },
  navLinks: {
    display: 'flex',
    gap: '1.5rem',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
  },
  socialLinks: {
    display: 'flex',
    gap: '1rem',
  },
  icon: {
    color: 'white',
    textDecoration: 'none',
  }
};
