// src/components/Footer.jsx
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      {/* Social links, credits */}
      <p>© {new Date().getFullYear()} PioJhonson. All rights reserved.</p>
    </footer>
  );
}
