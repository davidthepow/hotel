import './Gallery.css'

const galleryImages = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg',
    alt: 'Lobby del hotel'
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg',
    alt: 'Piscina con vista'
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg',
    alt: 'Restaurante elegante'
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg',
    alt: 'Habitación de lujo'
  },
  {
    id: 5,
    url: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg',
    alt: 'Área de spa'
  },
  {
    id: 6,
    url: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg',
    alt: 'Bar del hotel'
  }
]

const Gallery = () => {
  return (
    <section id="galeria" className="gallery">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Galería</h2>
          <p className="section-subtitle">
            Explora nuestras instalaciones y descubre el ambiente único que te espera
          </p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div key={image.id} className="gallery-item">
              <img src={image.url} alt={image.alt} />
              <div className="gallery-overlay">
                <span className="gallery-text">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
