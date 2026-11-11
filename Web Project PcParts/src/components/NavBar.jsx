import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function NavBar(props) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <nav className="navbar container">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-icon">P</span>
          <span>Pc<span className="brand-green">Parts</span></span>
        </Link>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          Menu
        </button>

        <div className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/products" onClick={closeMenu}>Products</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
          <Link to="/cart" className="cart-link" onClick={closeMenu}>
            Cart ({props.cartCount})
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
