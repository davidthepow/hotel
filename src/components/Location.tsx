import './Location.css'

const Location = () => {
  return (
    <section id="ubicacion" className="location">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Nuestra Ubicación</h2>
          <p className="section-subtitle">
            Ubicados estratégicamente para tu comodidad
          </p>
        </div>

        <div className="location-content">
          <div className="location-info">
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-details">
                <h3>Dirección</h3>
                <p>Av. Primavera 1234, Centro Histórico<br />Ciudad Capital, CP 12345</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📞</div>
              <div className="info-details">
                <h3>Teléfono</h3>
                <p>+52 (55) 1234-5678<br />+52 (55) 8765-4321</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">✉️</div>
              <div className="info-details">
                <h3>Email</h3>
                <p>info@hotelrealprimaveras.com<br />reservas@hotelrealprimaveras.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🕐</div>
              <div className="info-details">
                <h3>Horario de Atención</h3>
                <p>Check-in: 3:00 PM<br />Check-out: 12:00 PM</p>
              </div>
            </div>
          </div>

          <div className="location-map">
            <div className="map-placeholder">
              <div className="map-icon">🗺️</div>
              <p>Mapa Interactivo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location
