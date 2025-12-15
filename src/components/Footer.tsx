import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Hotel Real Primaveras</h3>
            <p>Tu destino de lujo y confort. Creando experiencias inolvidables desde 1995.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="YouTube">📺</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#habitaciones">Habitaciones</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#galeria">Galería</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Servicios</h4>
            <ul>
              <li><a href="#">Spa & Wellness</a></li>
              <li><a href="#">Restaurante</a></li>
              <li><a href="#">Eventos</a></li>
              <li><a href="#">Tours</a></li>
              <li><a href="#">Transporte</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contacto</h4>
            <ul className="contact-info">
              <li>📍 Av. Primavera 1234</li>
              <li>📞 +52 (55) 1234-5678</li>
              <li>✉️ info@hotelrealprimaveras.com</li>
              <li>🕐 24/7 Atención al Cliente</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Hotel Real Primaveras. Todos los derechos reservados.</p>
          <div className="footer-links">
            <a href="#">Política de Privacidad</a>
            <span>|</span>
            <a href="#">Términos y Condiciones</a>
            <span>|</span>
            <a href="#">Política de Cancelación</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
