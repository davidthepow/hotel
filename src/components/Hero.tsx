import './Hero.css'

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-overlay"></div>
      <img
        src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"
        alt="Hotel Real Primaveras"
        className="hero-image"
      />
      <div className="hero-content">
        <div className="container">
          <h1 className="hero-title">Bienvenido a Hotel Real Primaveras</h1>
          <p className="hero-subtitle">
            Experimenta el lujo y la comodidad en un entorno único.
            Tu escape perfecto te espera.
          </p>
          <div className="hero-buttons">
            <a href="#habitaciones" className="btn btn-primary">
              Ver Habitaciones
            </a>
            <a href="#contacto" className="btn btn-secondary">
              Contáctanos
            </a>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Descubre más</span>
        <div className="scroll-indicator"></div>
      </div>
    </section>
  )
}

export default Hero
