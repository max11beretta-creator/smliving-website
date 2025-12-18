function LiliumLiving() {
  return (
    <div className="project-detail">
      {/* Hero */}
      <section className="project-hero">
        <h1>RESIDENZA LILIUM LIVING</h1>
        <p>Bellusco - 6 Quadrilocali Esclusivi da 134 a 160 mq</p>
      </section>

      <div className="project-info">
        {/* Info Cards */}
        <div className="info-cards">
          <div className="info-card">
            <h3>6</h3>
            <p>Unità Esclusive</p>
          </div>
          <div className="info-card">
            <h3>134-160</h3>
            <p>Metrature (mq)</p>
          </div>
          <div className="info-card">
            <h3>A4</h3>
            <p>Classe Energetica</p>
          </div>
          <div className="info-card">
            <h3>Feb 2026</h3>
            <p>Inizio Cantiere</p>
          </div>
        </div>

        {/* Description Section */}
        <section className="description-section">
          <span className="label-category">IL PROGETTO</span>
          <h2 className="title-gold">
            Innovazione, stile ed eleganza per un concept abitativo esclusivo.
          </h2>
          
          <p>
            Residenza Lilium Living è un progetto esclusivo di sole 6 unità abitative a Bellusco, 
            pensato per chi cerca il massimo del comfort, della privacy e della qualità abitativa. 
            Solo quadrilocali di grande metratura, da 134 a 160 mq, con particolare attenzione ai dettagli 
            e alle finiture di alto livello.
          </p>
          <p>
            Immerso nel verde e in una zona residenziale di prestigio, Lilium Living offre un ambiente 
            tranquillo e riservato, pur mantenendo un facile accesso ai servizi e alle principali vie di comunicazione.
          </p>
          
          <h3 style={{marginTop: '3rem', marginBottom: '1.5rem', fontFamily: 'var(--font-sans)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1rem'}}>
            Le Tipologie
          </h3>
          
          <div className="overlay-box" style={{textAlign: 'left', marginBottom: '1.5rem'}}>
            <span className="label-category">PIANO TERRA</span>
            <p style={{marginBottom: '0.5rem'}}><strong style={{color: 'var(--gold-elegant)'}}>A01, A02</strong> - 160 mq</p>
            <p style={{marginLeft: '1rem', fontSize: '0.95rem'}}>• Giardini privati fino a 150 mq • Portico coperto • Tripla esposizione</p>
          </div>
          
          <div className="overlay-box" style={{textAlign: 'left', marginBottom: '1.5rem'}}>
            <span className="label-category">PIANO PRIMO</span>
            <p style={{marginBottom: '0.5rem'}}><strong style={{color: 'var(--gold-elegant)'}}>A03, A04</strong> - 134 mq</p>
            <p style={{marginLeft: '1rem', fontSize: '0.95rem'}}>• Terrazzi loggiati 35 mq • Balconi panoramici • Vista aperta sul verde</p>
          </div>
          
          <div className="overlay-box" style={{textAlign: 'left'}}>
            <span className="label-category">PIANO SECONDO ATTICO</span>
            <p style={{marginBottom: '0.5rem'}}><strong style={{color: 'var(--gold-elegant)'}}>A05, A06</strong> - 137 mq</p>
            <p style={{marginLeft: '1rem', fontSize: '0.95rem'}}>• Terrazzi panoramici 52 mq • Cabina armadio • Massima luminosità</p>
          </div>
          
          <h3 style={{marginTop: '3rem', marginBottom: '1.5rem', fontFamily: 'var(--font-sans)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1rem'}}>
            Caratteristiche Principali
          </h3>
          
          <div className="features-grid">
            <div className="feature-item">
              <span className="feature-icon">👑</span>
              <span>Solo 6 residenze esclusive</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🌱</span>
              <span>Classe energetica A4</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🏡</span>
              <span>Metrature da 134 a 160 mq</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🌳</span>
              <span>Giardini fino a 150 mq</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🔐</span>
              <span>Massima privacy</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💎</span>
              <span>Finiture di lusso</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🚗</span>
              <span>Box doppio incluso</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💰</span>
              <span>A partire da € 390.000</span>
            </div>
          </div>
        </section>

        {/* Download Brochure */}
        <div className="download-section">
          <h3>Scarica la Brochure Completa</h3>
          <p>Tutte le informazioni dettagliate su Residenza Lilium Living</p>
          <a href="/brochures/lilium-living.pdf" className="download-button" download>
            📥 SCARICA BROCHURE PDF
          </a>
        </div>

        {/* Gallery Section */}
        <section className="gallery-section">
          <span className="label-category">PLANIMETRIE</span>
          <h2 style={{textAlign: 'center', marginTop: '1rem'}}>Planimetrie Appartamenti</h2>
          <p style={{textAlign: 'center', color: 'var(--text-gray)', marginBottom: '3rem', fontSize: '1.05rem'}}>
            Solo 6 quadrilocali esclusivi • Tripla esposizione • Da 134 a 160 mq
          </p>
          
          <div style={{marginBottom: '3rem'}}>
            <h3 style={{color: 'var(--gold-elegant)', marginBottom: '1.5rem', textAlign: 'center'}}>
              Piano Terra - 160 mq con Giardino
            </h3>
            <div className="gallery-grid">
              <div className="gallery-item">
                <img src="/images/lilium-a01.jpg" alt="Appartamento A01 - Piano Terra 160 mq" />
                <p>A01 - Piano Terra - 160 mq</p>
              </div>
              <div className="gallery-item">
                <img src="/images/lilium-a02.jpg" alt="Appartamento A02 - Piano Terra 160 mq" />
                <p>A02 - Piano Terra - 160 mq</p>
              </div>
            </div>
          </div>

          <div style={{marginBottom: '3rem'}}>
            <h3 style={{color: 'var(--gold-elegant)', marginBottom: '1.5rem', textAlign: 'center'}}>
              Piano Primo - 134 mq con Terrazzi
            </h3>
            <div className="gallery-grid">
              <div className="gallery-item">
                <img src="/images/lilium-a03.jpg" alt="Appartamento A03 - Piano Primo 134 mq" />
                <p>A03 - Piano Primo - 134 mq</p>
              </div>
              <div className="gallery-item">
                <img src="/images/lilium-a04.jpg" alt="Appartamento A04 - Piano Primo 134 mq" />
                <p>A04 - Piano Primo - 134 mq</p>
              </div>
            </div>
          </div>

          <div>
            <h3 style={{color: 'var(--gold-elegant)', marginBottom: '1.5rem', textAlign: 'center'}}>
              Piano Secondo Attico - 137 mq con Terrazzi Panoramici
            </h3>
            <div className="gallery-grid">
              <div className="gallery-item">
                <img src="/images/lilium-a05.jpg" alt="Appartamento A05 - Attico 137 mq" />
                <p>A05 - Piano Secondo - 137 mq</p>
              </div>
              <div className="gallery-item">
                <img src="/images/lilium-a06.jpg" alt="Appartamento A06 - Attico 137 mq" />
                <p>A06 - Piano Secondo - 137 mq</p>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="map-section">
          <span className="label-category">LOCATION</span>
          <h2 style={{textAlign: 'center', marginTop: '1rem'}}>Posizione</h2>
          <p style={{textAlign: 'center', color: 'var(--text-gray)', marginBottom: '2rem', fontSize: '1.05rem'}}>
            Via Dolomiti, 7 - 20882 Bellusco (MB)
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
              title="Mappa Lilium Living Bellusco"
            ></iframe>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h2>Interessato a Lilium Living?</h2>
          <p>Contattaci per maggiori informazioni e per prenotare una visita</p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem', flexWrap: 'wrap'}}>
            <a href="/contatti" className="cta-button">CONTATTACI</a>
            <a href="mailto:bellusco@smliving.it" className="cta-button">INVIA EMAIL</a>
            <a href="https://wa.me/393467854342" className="cta-button" style={{background: '#25D366'}}>WHATSAPP</a>
          </div>
        </section>
      </div>

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

export default LiliumLiving;"Update Lilium Living with new design and brochure"
