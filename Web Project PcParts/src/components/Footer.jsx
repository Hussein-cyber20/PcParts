import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>
          <Link to="/" className="brand footer-brand">
            <span className="brand-icon">P</span>
            <span>
              Pc<span className="brand-green">Parts</span>
            </span>
          </Link>
        </div>

        <div className="footer-links">
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      <div className="container copyright">
        © 2026 PcParts. 
      </div>
    </footer>
  )
}

export default Footer
