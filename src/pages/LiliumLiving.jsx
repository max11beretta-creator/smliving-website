function LiliumLiving() {
  return (
    <div className="project-detail">
      <section className="project-hero">
        <h1>Residenza Lilium Living</h1>
        <p>Bellusco - 6 Unità Esclusive</p>
      </section>

      <div className="project-info">
        <div className="info-cards">
          <div className="info-card">
            <h3>6</h3>
            <p>Unità Esclusive</p>
          </div>
          <div className="info-card">
            <h3>A+</h3>
            <p>Classe Energetica</p>
          </div>
          <div className="info-card">
            <h3>Feb 2026</h3>
            <p>Inizio Cantiere</p>
          </div>
          <div className="info-card">
            <h3>2027</h3>
            <p>Consegna Prevista</p>
          </div>
        </div>

        <section className="description-section">
          <h2>Il Progetto</h2>
          <p>
            Residenza Lilium Living è un progetto esclusivo di sole 6 unità abitative a Bellusco, 
            pensato per chi cerca il massimo del comfort, della privacy e della qualità abitativa. 
            Ogni residenza è stata progettata con particolare attenzione ai dettagli e alle finiture di alto livello.
          </p>
          <p>
            Immerso nel verde e in una zona residenziale di prestigio, Lilium Living offre un ambiente 
            tranquillo e riservato, pur mantenendo un facile accesso ai servizi e alle principali vie di comunicazione.
          </p>
          
          <h3 style={{marginTop: '2rem', marginBottom: '1rem'}}>Caratteristiche Principali</h3>
          <div className="features-grid">
            <div className="feature-item">
              <span className="feature-icon">👑</span>
              <span>Residenze esclusive e prestigiose</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🌱</span>
              <span>Classe energetica A+</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🏡</span>
              <span>Ampi spazi abitativi</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🌳</span>
              <span>Immerso nel verde</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🔐</span>
              <span>Massima privacy</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💎</span>
              <span>Finiture di lusso</span>
            </div>
          </div>
        </section>

        <section className="gallery-section">
          <h2>Galleria Immagini</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="/images/lilium-exterior.jpg" alt="Esterno Lilium Living" />
            </div>
            <div className="gallery-item">
              <img src="/images/lilium-interior-1.jpg" alt="Interni Lilium Living" />
            </div>
            <div className="gallery-item">
              <img src="/images/lilium-interior-2.jpg" alt="Camera Lilium Living" />
            </div>
            <div className="gallery-item">
              <img src="/images/lilium-garden.jpg" alt="Giardino Lilium Living" />
            </div>
          </div>
        </section>

        <section className="map-section">
          <h2>Posizione</h2>
          <p style={{marginBottom: '1.5rem', color: '#666'}}>
            Bellusco (MB) - Zona residenziale di prestigio immersa nel verde
          </p>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.5!2d9.42!3d45.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDM3JzQ4LjAiTiA5wrAyNScwMC4wIkU!5e0!3m2!1sit!2sit!4v1234567890"
              width="100%"
              height="100%"
              style={{border: 0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa Lilium Living"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
}

export default LiliumLiving;"Update Lilium Living with floor plans and correct sqm"
