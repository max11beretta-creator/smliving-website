import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In produzione, qui invieresti i dati a un backend o servizio email
    console.log('Form submitted:', formData);
    
    setSubmitted(true);
    
    // Reset form dopo 3 secondi
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Contattaci</h2>
        <p style={{textAlign: 'center', marginBottom: '2rem', color: '#666'}}>
          Sei interessato ai nostri progetti? Compila il form e ti ricontatteremo al più presto.
        </p>
        
        <div className="contact-form">
          {submitted ? (
            <div style={{
              padding: '2rem',
              background: '#d4edda',
              color: '#155724',
              borderRadius: '10px',
              textAlign: 'center',
              fontSize: '1.1rem'
            }}>
              ✓ Messaggio inviato con successo! Ti contatteremo presto.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nome e Cognome *</label>
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
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Telefono</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Messaggio *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Invia Richiesta
              </button>
            </form>
          )}
        </div>

        <div style={{
          marginTop: '3rem',
          padding: '2rem',
          background: 'white',
          borderRadius: '15px',
          boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{marginBottom: '1rem', color: '#1a365d'}}>Informazioni di Contatto</h3>
          <p style={{color: '#666', lineHeight: '1.8'}}>
            <strong>SM Living - Santa Marta S.r.l.</strong><br />
            Sviluppo Immobiliare in Brianza<br />
            <br />
            📧 Email: info@smliving.it<br />
            📱 Telefono: +39 XXX XXX XXXX<br />
            📍 Sede: Brianza, Lombardia
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
