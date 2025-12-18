import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    progetto: '',
    messaggio: '',
    privacy: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.privacy) {
      alert('Per favore accetta la privacy policy per continuare.');
      return;
    }

    // Create mailto link with form data
    const subject = encodeURIComponent(`Richiesta informazioni - ${formData.progetto || 'Generale'}`);
    const body = encodeURIComponent(`
Nome: ${formData.nome}
Email: ${formData.email}
Telefono: ${formData.telefono}
Progetto di interesse: ${formData.progetto}

Messaggio:
${formData.messaggio}
    `);

    window.location.href = `mailto:info@smliving.it?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="project-hero">
        <h1>CONTATTI</h1>
        <p>Compila il form e richiedi tutte le informazioni che desideri.<br/>
        Verrai ricontattato da un responsabile vendite dedicato,<br/>
        per ricevere tutte le informazioni richieste.</p>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="form-container">
          <h2 style={{fontFamily: 'var(--font-serif)', fontSize: '2rem'}}>SM LIVING</h2>
          <p style={{fontFamily: 'var(--font-sans)', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase'}}>
            LA TUA CASA OLTRE L'ORDINARIO
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome">Nome *</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                placeholder="Il tuo nome completo"
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
                placeholder="nome@esempio.it"
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefono">Telefono *</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
                placeholder="+39 XXX XXX XXXX"
              />
            </div>

            <div className="form-group">
              <label htmlFor="progetto">Progetto di interesse *</label>
              <select
                id="progetto"
                name="progetto"
                value={formData.progetto}
                onChange={handleChange}
                required
              >
                <option value="">Seleziona un progetto</option>
                <option value="Excelsior Living - Agrate Brianza">Excelsior Living - Agrate Brianza</option>
                <option value="Lilium Living - Bellusco">Lilium Living - Bellusco</option>
                <option value="Informazioni generali">Informazioni generali</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="messaggio">Messaggio</label>
              <textarea
                id="messaggio"
                name="messaggio"
                value={formData.messaggio}
                onChange={handleChange}
                placeholder="Scrivi qui il tuo messaggio..."
              ></textarea>
            </div>

            <div className="checkbox-group">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                checked={formData.privacy}
                onChange={handleChange}
                required
              />
              <label htmlFor="privacy">
                Acconsento al trattamento dei miei dati personali secondo la Privacy Policy. 
                I dati forniti saranno utilizzati esclusivamente per rispondere alla richiesta di informazioni.
              </label>
            </div>

            <button type="submit" className="cta-button cta-button-blue">
              INVIA RICHIESTA INFORMAZIONI
            </button>
          </form>
        </div>
      </section>

      {/* Contact Info */}
      <section style={{padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto'}}>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem'}}>
          {/* Sede */}
          <div>
            <span className="label-category">SEDE</span>
            <h3 style={{marginTop: '1rem', marginBottom: '1rem'}}>Ufficio</h3>
            <p style={{marginBottom: '0.5rem'}}>
              <strong>Indirizzo:</strong><br/>
              Via Santa Marta, 5<br/>
              20871 Vimercate (MB)
            </p>
          </div>

          {/* Contatti */}
          <div>
            <span className="label-category">CONTATTI</span>
            <h3 style={{marginTop: '1rem', marginBottom: '1rem'}}>Scrivici</h3>
            <p style={{marginBottom: '0.5rem'}}>
              <strong>Email generale:</strong><br/>
              <a href="mailto:info@smliving.it">info@smliving.it</a>
            </p>
            <p style={{marginBottom: '0.5rem'}}>
              <strong>Excelsior Living:</strong><br/>
              <a href="mailto:agrate@smliving.it">agrate@smliving.it</a>
            </p>
            <p>
              <strong>Lilium Living:</strong><br/>
              <a href="mailto:bellusco@smliving.it">bellusco@smliving.it</a>
            </p>
          </div>

          {/* Telefono */}
          <div>
            <span className="label-category">TELEFONO</span>
            <h3 style={{marginTop: '1rem', marginBottom: '1rem'}}>Chiamaci</h3>
            <p style={{marginBottom: '0.5rem'}}>
              <strong>Mobile:</strong><br/>
              <a href="tel:+393467854342">+39 346 785 4342</a>
            </p>
            <p>
              <strong>Ufficio:</strong><br/>
              <a href="tel:+390396388196">+39 039 638 8196</a>
            </p>
          </div>
        </div>

        {/* Social & Legal */}
        <div style={{marginTop: '3rem', textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid #e0e0e0'}}>
          <p style={{color: 'var(--text-gray)', fontSize: '0.9rem'}}>
            <strong>SM Living - Santa Marta S.r.l.</strong><br/>
            P.IVA: 04106340963 | REA: MB-1726317<br/>
            Capitale Sociale: € 10.000,00 i.v.
          </p>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a 
        href="https://wa.me/393467854342" 
        className="whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Contattaci su WhatsApp"
      >
        📱
      </a>
    </div>
  );
}

export default Contact;"Add complete contact form"
