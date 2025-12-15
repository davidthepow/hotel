import { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>Hotel Real Primaveras</h1>
          </div>

          <button
            className={`menu-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${menuOpen ? 'active' : ''}`}>
            <button onClick={() => scrollToSection('inicio')}>Inicio</button>
            <button onClick={() => scrollToSection('habitaciones')}>Habitaciones</button>
            <button onClick={() => scrollToSection('servicios')}>Servicios</button>
            <button onClick={() => scrollToSection('galeria')}>Galería</button>
            <button onClick={() => scrollToSection('contacto')}>Contacto</button>
          </nav>

          <a href="#reservar" className="btn-reservar">Reservar Ahora</a>
        </div>
      </div>
    </header>
  )
}

export default Header
