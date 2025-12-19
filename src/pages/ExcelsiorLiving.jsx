function ExcelsiorLiving() {
  return (
    <div className="project-detail">
      {/* Hero with Logo */}
      <section className="project-hero">
        <img 
          src="/images/logos/excelsior-logo.png" 
          alt="Excelsior Living - Emozione e modernità" 
          style={{
            maxWidth: '250px',
            height: 'auto',
            margin: '0 auto 2rem',
            display: 'block'
          }}
        />
        <h1>RESIDENZA EXCELSIOR LIVING</h1>
        <p>Agrate Brianza - 24 Appartamenti Moderni • Trilocali 108-117 mq • Quadrilocali 122-138 mq</p>
      </section>

      <div className="project-info">
        <div className="info-cards">
          <div className="info-card">
            <h3>24</h3>
            <p>Unità Abitative</p>
          </div>
          <div className="info-card">
            <h3>108-138</h3>
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

        <section className="description-section">
          <span className="label-category">IL PROGETTO</span>
          <h2 className="title-gold">
            Emozione e modernità per un nuovo standard di vita.
          </h2>
          
          <p>
            Residenza Excelsior Living rappresenta un nuovo standard di vita ad Agrate Brianza. 
            24 appartamenti esclusivi in Classe A4 distribuiti su due eleganti palazzine, 
            con metrature generose e particolare attenzione al comfort abitativo.
          </p>
          <p>
            Trilocali da 108 a 117 mq e Quadrilocali da 122 a 138 mq, dove ogni spazio è pensato 
            per il tuo benessere. A soli 5 minuti dalla Metro M2, perfetto equilibrio tra 
            tranquillità residenziale e collegamenti urbani.
          </p>
          
          <h3 style={{marginTop: '3rem', marginBottom: '1.5rem', fontFamily: 'var(--font-sans)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1rem'}}>
            Le Tipologie
          </h3>
          
          <div className="overlay-box" style={{textAlign: 'left', marginBottom: '1.5rem'}}>
            <span className="label-category">QUADRILOCALI PIANO TERRA</span>
            <p style={{marginBottom: '0.5rem'}}><strong style={{color: 'var(--gold-elegant)'}}>138 mq</strong></p>
            <p style={{marginLeft: '1rem', fontSize: '0.95rem'}}>• Living 35 mq • 3 camere • Doppi servizi • Giardino privato • Box doppio</p>
          </div>

          <div className="overlay-box" style={{textAlign: 'left', marginBottom: '1.5rem'}}>
            <span className="label-category">TRILOCALI</span>
            <p style={{marginBottom: '0.5rem'}}><strong style={{color: 'var(--gold-elegant)'}}>108-117 mq</strong></p>
            <p style={{marginLeft: '1rem', fontSize: '0.95rem'}}>• Living ampio • 2 camere • Balconi loggiati • Box incluso</p>
          </div>

          <div className="overlay-box" style={{textAlign: 'left'}}>
            <span className="label-category">QUADRILOCALI</span>
            <p style={{marginBottom: '0.5rem'}}><strong style={{color: 'var(--gold-elegant)'}}>122-138 mq</strong></p>
            <p style={{marginLeft: '1rem', fontSize: '0.95rem'}}>• Living 30-35 mq • 3 camere • Doppi servizi • Terrazzi • Box doppio</p>
          </div>
          
          <h3 style={{marginTop: '3rem', marginBottom: '1.5rem', fontFamily: 'var(--font-sans)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1rem'}}>
            Caratteristiche Principali
          </h3>
          
          <div className="features-grid">
            <div className="feature-item">
              <span className="feature-icon">🏙️</span>
              <span>A 5 minuti da Metro M2</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🌱</span>
              <span>Classe energetica A4</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💰</span>
              <span>Sismabonus fino €48.000</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🏢</span>
              <span>24 unità esclusive</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📐</span>
              <span>Metrature generose</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🚗</span>
              <span>Box auto incluso</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🏡</span>
              <span>Giardini privati PT</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💎</span>
              <span>Finiture di pregio</span>
            </div>
          </div>

          <div style={{background: 'var(--bg-cream)', padding: '2rem', borderRadius: '8px', marginTop: '3rem'}}>
            <h3 style={{color: 'var(--teal-dark)', marginBottom: '1rem'}}>
              💰 Sismabonus 80% - Risparmio fino a €48.000
            </h3>
            <p>
              Grazie al <strong>Sismabonus 80%</strong>, puoi beneficiare di una detrazione fiscale 
              eccezionale fino a €48.000 per l'acquisto del tuo appartamento in Residenza Excelsior Living.
            </p>
            <p style={{marginTop: '1rem'}}>
              Un'opportunità unica per investire in un immobile di nuova costruzione con un risparmio 
              significativo e la massima sicurezza antisismica.
            </p>
          </div>
        </section>

        {/* Download Brochure */}
        <div className="download-section">
          <h3>Scarica la Brochure Completa</h3>
          <p>Tutte le informazioni dettagliate su Residenza Excelsior Living</p>
          <a href="/brochures/excelsior-living.pdf" className="download-button" download>
            📥 SCARICA BROCHURE PDF
          </a>
        </div>

        {/* Gallery Section */}
        <section className="gallery-section">
          <span className="label-category">PLANIMETRIE</span>
          <h2 style={{textAlign: 'center', marginTop: '1rem'}}>Planimetrie Appartamenti</h2>
          <p style={{textAlign: 'center', color: 'var(--text-gray)', marginBottom: '3rem', fontSize: '1.05rem'}}>
            24 unità • Trilocali 108-117 mq • Quadrilocali 122-138 mq
          </p>
          
          <div style={{marginBottom: '3rem'}}>
            <h3 style={{color: 'var(--gold-elegant)', marginBottom: '1.5rem', textAlign: 'center'}}>
              Piano Terra - Quadrilocali con Giardino
            </h3>
            <div className="gallery-grid">
              <div className="gallery-item">
                <img src="/images/excelsior-a01.jpg" alt="Appartamento A01 - Piano Terra" />
                <p>A01 - Piano Terra - 138 mq</p>
              </div>
              <div className="gallery-item">
                <img src="/images/excelsior-a02.jpg" alt="Appartamento A02 - Piano Terra" />
                <p>A02 - Piano Terra - 138 mq</p>
              </div>
              <div className="gallery-item">
                <img src="/images/excelsior-a03.jpg" alt="Appartamento A03 - Piano Terra" />
                <p>A03 - Piano Terra - 122 mq</p>
              </div>
              <div className="gallery-item">
                <img src="/images/excelsior-a04.jpg" alt="Appartamento A04 - Piano Terra" />
                <p>A04 - Piano Terra - 122 mq</p>
              </div>
            </div>
          </div>

          <div style={{marginBottom: '3rem'}}>
            <h3 style={{color: 'var(--gold-elegant)', marginBottom: '1.5rem', textAlign: 'center'}}>
              Piano Primo - Trilocali e Quadrilocali
            </h3>
            <div className="gallery-grid">
              <div className="gallery-item">
                <img src="/images/excelsior-a05.jpg" alt="Appartamento A05 - Piano Primo" />
                <p>A05 - Piano Primo - 117 mq</p>
              </div>
              <div className="gallery-item">
                <img src="/images/excelsior-a06.jpg" alt="Appartamento A06 - Piano Primo" />
                <p>A06 - Piano Primo - 108 mq</p>
              </div>
              <div className="gallery-item">
                <img src="/images/excelsior-a07.jpg" alt="Appartamento A07 - Piano Primo" />
                <p>A07 - Piano Primo - 122 mq</p>
              </div>
              <div className="gallery-item">
                <img src="/images/excelsior-a08.jpg" alt="Appartamento A08 - Piano Primo" />
                <p>A08 - Piano Primo - 122 mq</p>
              </div>
            </div>
          </div>

          <div>
            <h3 style={{color: 'var(--gold-elegant)', marginBottom: '1.5rem', textAlign: 'center'}}>
              Piano Secondo - Trilocali e Quadrilocali
            </h3>
            <div className="gallery-grid">
              <div className="gallery-item">
                <img src="/images/excelsior-a09.jpg" alt="Appartamento A09 - Piano Secondo" />
                <p>A09 - Piano Secondo - 117 mq</p>
              </div>
              <div className="gallery-item">
                <img src="/images/excelsior-a10.jpg" alt="Appartamento A10 - Piano Secondo" />
                <p>A10 - Piano Secondo - 108 mq</p>
              </div>
              <div className="gallery-item">
                <img src="/images/excelsior-a11.jpg" alt="Appartamento A11 - Piano Secondo" />
                <p>A11 - Piano Secondo - 122 mq</p>
              </div>
              <div className="gallery-item">
                <img src="/images/excelsior-a12.jpg" alt="Appartamento A12 - Piano Secondo" />
                <p>A12 - Piano Secondo - 122 mq</p>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="map-section">
          <span className="label-category">LOCATION</span>
          <h2 style={{textAlign: 'center', marginTop: '1rem'}}>Posizione Strategica</h2>
          <p style={{textAlign: 'center', color: 'var(--text-gray)', marginBottom: '2rem', fontSize: '1.05rem'}}>
            Via della Costituzione - 20864 Agrate Brianza (MB)
          </p>
          
          <div style={{background: 'var(--bg-light)', padding: '2rem', marginBottom: '2rem'}}>
            <h3 style={{textAlign: 'center', marginBottom: '1.5rem', color: 'var(--teal-dark)'}}>
              Collegamenti e Servizi
            </h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem'}}>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>🚇</div>
                <p><strong>Metro M2</strong><br/>5 minuti</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>🏢</div>
                <p><strong>Centro Agrate</strong><br/>3 minuti</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>🏪</div>
                <p><strong>Supermercati</strong><br/>2 minuti</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>🏫</div>
                <p><strong>Scuole</strong><br/>5 minuti</p>
              </div>
            </div>
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.5!2d9.35!3d45.56!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDMzJzM2LjAiTiA5wrAyMScwMC4wIkU!5e0!3m2!1sit!2sit!4v1234567890"
              width="100%"
              height="100%"
              style={{border: 0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa Excelsior Living Agrate Brianza"
            ></iframe>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h2>Interessato a Excelsior Living?</h2>
          <p>Contattaci per maggiori informazioni e per prenotare una visita</p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem', flexWrap: 'wrap'}}>
            <a href="/contatti" className="cta-button">CONTATTACI</a>
            <a href="mailto:agrate@smliving.it" className="cta-button">INVIA EMAIL</a>
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

export default ExcelsiorLiving;"Update Excelsior with logo and new design"
