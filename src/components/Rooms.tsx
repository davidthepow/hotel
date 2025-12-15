import './Rooms.css'

const rooms = [
  {
    id: 1,
    name: 'Suite Ejecutiva',
    description: 'Elegante suite con vista panorámica, área de trabajo y comodidades premium.',
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
    price: '$150',
    features: ['50 m²', 'Vista panorámica', 'Wi-Fi gratis', 'Minibar']
  },
  {
    id: 2,
    name: 'Habitación Deluxe',
    description: 'Espaciosa habitación con cama king size y baño de lujo con jacuzzi.',
    image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg',
    price: '$120',
    features: ['40 m²', 'Cama King', 'Jacuzzi', 'Balcón privado']
  },
  {
    id: 3,
    name: 'Habitación Estándar',
    description: 'Acogedora habitación perfecta para estancias confortables y relajantes.',
    image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg',
    price: '$85',
    features: ['30 m²', 'Cama Queen', 'TV HD', 'Aire acondicionado']
  },
  {
    id: 4,
    name: 'Suite Presidencial',
    description: 'La máxima expresión de lujo con sala de estar, comedor y servicios exclusivos.',
    image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg',
    price: '$300',
    features: ['100 m²', 'Sala privada', 'Mayordomo', 'Terraza']
  }
]

const Rooms = () => {
  return (
    <section id="habitaciones" className="rooms">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Nuestras Habitaciones</h2>
          <p className="section-subtitle">
            Descubre el espacio perfecto para tu estadía, diseñado con elegancia y confort
          </p>
        </div>

        <div className="rooms-grid">
          {rooms.map((room) => (
            <div key={room.id} className="room-card">
              <div className="room-image-wrapper">
                <img src={room.image} alt={room.name} className="room-image" />
                <div className="room-price">{room.price}<span>/noche</span></div>
              </div>
              <div className="room-content">
                <h3 className="room-name">{room.name}</h3>
                <p className="room-description">{room.description}</p>
                <ul className="room-features">
                  {room.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <button className="btn-room">Ver Detalles</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Rooms
