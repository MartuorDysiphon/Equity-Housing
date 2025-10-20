import { useState } from 'react'
import { Link } from 'react-router-dom'
import './layout.css'
import Logo from '../assets/source/equity.png'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <Link to="/" className="logo">
        <img src={Logo} alt="logo" />
      </Link>

      <nav className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/explore">Residences</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <button
        className="menu-btn"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <i className={menuOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
      </button>

      <nav className={`dropdown-menu ${menuOpen ? 'show' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/services" onClick={closeMenu}>Services</Link>
        <Link to="/explore" onClick={closeMenu}>Explore</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
      </nav>

      <Link to="/apply" className="button">Apply Now</Link>
    </header>
  )
}

export default Navbar
