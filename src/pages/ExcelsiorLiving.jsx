function ExcelsiorLiving() {
  return (
    <div className="project-detail">
      <section className="project-hero">
        <h1>Residenza Excelsior Living</h1>
        <p>Agrate Brianza - 24 Unità Abitative di Design</p>
      </section>

      <div className="project-info">
        <div className="info-cards">
          <div className="info-card">
            <h3>24</h3>
            <p>Unità Abitative</p>
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
            Residenza Excelsior Living rappresenta l'eccellenza dello sviluppo immobiliare moderno ad Agrate Brianza. 
            Il complesso residenziale comprende 24 unità abitative progettate con particolare attenzione al design contemporaneo, 
            alla sostenibilità ambientale e al comfort abitativo.
          </p>
          <p>
            Situato in una posizione strategica, il progetto offre facile accesso ai principali servizi, 
            collegamenti autostradali e mezzi di trasporto, mantenendo al contempo un ambiente tranquillo e residenziale.
          </p>
          
          <h3 style={{marginTop: '2rem', marginBottom: '1rem'}}>Caratteristiche Principali</h3>
          <div className="features-grid">
            <div className="feature-item">
              <span className="feature-icon">🏡</span>
              <span>Design moderno e funzionale</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🌱</span>
              <span>Classe energetica A+</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🚗</span>
              <span>Posti auto coperti</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🌳</span>
              <span>Spazi verdi comuni</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🔒</span>
              <span>Sicurezza e privacy</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✨</span>
              <span>Finiture di pregio</span>
            </div>
          </div>
        </section>

        <section className="gallery-section">
          <h2>Galleria Immagini</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="/images/excelsior-exterior.jpg" alt="Esterno Excelsior Living" />
            </div>
            <div className="gallery-item">
              <img src="/images/excelsior-interior-1.jpg" alt="Interni Excelsior Living" />
            </div>
            <div className="gallery-item">
              <img src="/images/excelsior-interior-2.jpg" alt="Cucina Excelsior Living" />
            </div>
            <div className="gallery-item">
              <img src="/images/excelsior-green.jpg" alt="Spazi verdi Excelsior Living" />
            </div>
          </div>
        </section>

        <section className="map-section">
          <h2>Posizione</h2>
          <p style={{marginBottom: '1.5rem', color: '#666'}}>
            Via Savio, Agrate Brianza (MB) - Posizione strategica con facile accesso a servizi e trasporti
          </p>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.5!2d9.35!3d45.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDM0JzQ4LjAiTiA5wrAyMScwMC4wIkU!5e0!3m2!1sit!2sit!4v1234567890"
              width="100%"
              height="100%"
              style={{border: 0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa Excelsior Living"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ExcelsiorLiving;
