import './Services.css'

const services = [
  {
    id: 1,
    title: 'Wi-Fi de Alta Velocidad',
    description: 'Internet gratuito en todas las áreas del hotel',
    icon: '📶'
  },
  {
    id: 2,
    title: 'Restaurante Gourmet',
    description: 'Cocina internacional y local las 24 horas',
    icon: '🍽️'
  },
  {
    id: 3,
    title: 'Spa y Wellness',
    description: 'Centro de bienestar con masajes y tratamientos',
    icon: '💆'
  },
  {
    id: 4,
    title: 'Piscina Climatizada',
    description: 'Piscina infinity con vista panorámica',
    icon: '🏊'
  },
  {
    id: 5,
    title: 'Gimnasio Completo',
    description: 'Equipamiento de última generación disponible 24/7',
    icon: '💪'
  },
  {
    id: 6,
    title: 'Estacionamiento',
    description: 'Parking privado gratuito con seguridad',
    icon: '🚗'
  },
  {
    id: 7,
    title: 'Servicio de Habitación',
    description: 'Atención personalizada las 24 horas',
    icon: '🛎️'
  },
  {
    id: 8,
    title: 'Centro de Negocios',
    description: 'Salas de reuniones y servicios ejecutivos',
    icon: '💼'
  }
]

const Services = () => {
  return (
    <section id="servicios" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Servicios y Amenidades</h2>
          <p className="section-subtitle">
            Todo lo que necesitas para una experiencia inolvidable
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="services-extra">
          <div className="extra-card">
            <img
              src="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg"
              alt="Eventos especiales"
              className="extra-image"
            />
            <div className="extra-content">
              <h3>Eventos Especiales</h3>
              <p>
                Organizamos bodas, conferencias y eventos corporativos con servicios
                personalizados y espacios versátiles para hasta 300 personas.
              </p>
              <button className="btn-extra">Más Información</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
