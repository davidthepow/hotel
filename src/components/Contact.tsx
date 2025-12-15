import { useState, FormEvent } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkin: '',
    checkout: '',
    guests: '1',
    message: ''
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Gracias por tu interés. Nos pondremos en contacto contigo pronto.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contacto" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Reserva tu Estadía</h2>
          <p className="section-subtitle">
            Completa el formulario y nos pondremos en contacto contigo
          </p>
        </div>

        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Nombre Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Teléfono</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="guests">Número de Huéspedes</label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                >
                  <option value="1">1 persona</option>
                  <option value="2">2 personas</option>
                  <option value="3">3 personas</option>
                  <option value="4">4 personas</option>
                  <option value="5+">5+ personas</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="checkin">Fecha de Entrada</label>
                <input
                  type="date"
                  id="checkin"
                  name="checkin"
                  value={formData.checkin}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="checkout">Fecha de Salida</label>
                <input
                  type="date"
                  id="checkout"
                  name="checkout"
                  value={formData.checkout}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje o Requisitos Especiales</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Cuéntanos sobre tus necesidades especiales o preferencias..."
              ></textarea>
            </div>

            <button type="submit" className="btn-submit">
              Enviar Solicitud
            </button>
          </form>

          <div className="contact-sidebar">
            <div className="sidebar-card">
              <h3>Por qué elegirnos</h3>
              <ul className="benefits-list">
                <li>✓ Cancelación gratuita hasta 24h antes</li>
                <li>✓ Mejor precio garantizado</li>
                <li>✓ Atención personalizada 24/7</li>
                <li>✓ Check-in express</li>
                <li>✓ Desayuno buffet incluido</li>
              </ul>
            </div>

            <div className="sidebar-card promo">
              <h3>Oferta Especial</h3>
              <p className="promo-discount">20% OFF</p>
              <p>Reserva 3 noches o más y obtén un descuento especial</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
