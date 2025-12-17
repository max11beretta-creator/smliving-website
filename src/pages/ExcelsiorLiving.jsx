function ExcelsiorLiving() {
  return (
    <div className="project-detail">
      <section className="project-hero">
        <h1>Residenza Excelsior Living</h1>
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
          <h2>Il Progetto</h2>
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
          
          <h3 style={{marginTop: '2rem', marginBottom: '1rem'}}>Le Tipologie</h3>
          
          <div style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '10px', marginBottom: '1.5rem'}}>
            <p><strong style={{color: '#2C5F7E'}}>Quadrilocali Piano Terra</strong> - 138 mq</p>
            <p style={{marginLeft: '1rem'}}>• Living 35 mq • 3 camere • Doppi servizi • GIARDINO PRIVATO • Box doppio</p>
            <p style={{marginLeft: '1rem', marginTop: '0.5rem', color: '#2C5F7E', fontWeight: 'bold'}}>
              Prezzo: Su richiesta
            </p>
          </div>
          
          <div style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '10px', marginBottom: '1.5rem'}}>
            <p><strong style={{color: '#2C5F7E'}}>Trilocali Piano Primo</strong> - 113-117 mq</p>
            <p style={{marginLeft: '1rem'}}>• Living 30-32 mq • 2 camere • Doppi servizi • Terrazzi panoramici</p>
            <p style={{marginLeft: '1rem', marginTop: '0.5rem', color: '#2C5F7E', fontWeight: 'bold'}}>
              Prezzo: Su richiesta
            </p>
          </div>
          
          <div style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '10px', marginBottom: '1.5rem'}}>
            <p><strong style={{color: '#2C5F7E'}}>Quadrilocali Piano Primo</strong> - 122-129 mq</p>
            <p style={{marginLeft: '1rem'}}>• Living 32-35 mq • 3 camere • Doppi servizi • Terrazzi panoramici</p>
            <p style={{marginLeft: '1rem', marginTop: '0.5rem', color: '#2C5F7E', fontWeight: 'bold'}}>
              Prezzo: Su richiesta
            </p>
          </div>
          
          <div style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '10px', marginBottom: '1.5rem'}}>
            <p><strong style={{color: '#2C5F7E'}}>Trilocali Piano Secondo</strong> - 108 mq</p>
            <p style={{marginLeft: '1rem'}}>• Living 28 mq • 2 camere • Doppi servizi • Terrazzi con vista</p>
            <p style={{marginLeft: '1rem', marginTop: '0.5rem', color: '#2C5F7E', fontWeight: 'bold'}}>
              Prezzo: Su richiesta
            </p>
          </div>
          
          <div style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '10px'}}>
            <p><strong style={{color: '#2C5F7E'}}>Quadrilocali Piano Secondo</strong> - 122-129 mq</p>
            <p style={{marginLeft: '1rem'}}>• Living 32-35 mq • 3 camere • Doppi servizi • Terrazzi panoramici</p>
            <p style={{marginLeft: '1rem', marginTop: '0.5rem', color: '#2C5F7E', fontWeight: 'bold'}}>
              Prezzo: Su richiesta
            </p>
          </div>
          
          <h3 style={{marginTop: '2rem', marginBottom: '1rem'}}>Caratteristiche Principali</h3>
          <div className="features-grid">
            <div className="feature-item">
              <span className="feature-icon">🏢</span>
              <span>24 unità abitative</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🌱</span>
              <span>Classe energetica A4</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🏡</span>
              <span>Metrature da 108 a 138 mq</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🚇</span>
              <span>Metro M2 a 5 minuti</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🌳</span>
              <span>Giardini privati PT</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💎</span>
              <span>Finiture personalizzabili</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🚗</span>
              <span>Box auto incluso</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💰</span>
              <span>Sismabonus €48.000</span>
            </div>
          </div>
        </section>

        <section className="gallery-section">
          <h2>Planimetrie Appartamenti</h2>
          <p style={{marginBottom: '2rem', color: '#666', textAlign: 'center'}}>
            24 unità abitative • Trilocali e Quadrilocali • Metrature generose
          </p>
          
          {/* PIANO TERRA - A01-A04 */}
          <div style={{marginBottom: '3rem'}}>
            <h3 style={{color: '#2C5F7E', marginBottom: '1.5rem'}}>Piano Terra - Quadrilocali 138 mq con Giardino</h3>
            <div className="gallery-grid">
              <div className="gallery-item">
                <img src="/images/excelsior-a01.jpg" alt="Appartamento A01 - Piano Terra 138 mq" />
                <p style={{textAlign: 'center', marginTop: '0.5rem', fontWeight: 'bold', color: '#2C5F7E'}}>
                  A01 - Piano Terra - 138 mq
                </p>
              </div>
              <div className="gallery-item">
                <img src="/images/excelsior-a02.jpg" alt="Appartamento A02 - Piano Terra 138 mq" />
                <p style={{textAlign: 'center', marginTop: '0.5rem', fontWeight: 'bold', color: '#2C5F7E'}}>
                  A02 - Piano Terra - 138 mq
                </p>
              </div>
              <div className="gallery-item">
                <img src="/images/excelsior-a03.jpg" alt="Appartamento A03 - Piano Terra 138 mq" />
                <p style={{textAlign: 'center', marginTop: '0.5rem', fontWeight: 'bold', color: '#2C5F7E'}}>
                  A03 - Piano Terra - 138 mq
                </p>
              </div>
              <div className="gallery-item">
                <img src="/images/excelsior-a04.jpg" alt="Appartamento A04 - Piano Terra 138 mq" />
                <p style={{textAlign: 'center', marginTop: '0.5rem', fontWeight: 'bold', color: '#2C5F7E'}}>
                  A04 - Piano Terra - 138 mq
                </p>
              </div>
            </div>
          </div>

          {/* PIANO PRIMO - A05-A08 */}
          <div style={{marginBottom: '3rem'}}>
            <h3 style={{color: '#2C5F7E', marginBottom: '1.5rem'}}>Piano Primo - Trilocali e Quadrilocali</h3>
            <div className="gallery-grid">
              <div className="gallery-item">
                <img src="/images/excelsior-a05.jpg" alt="Appartamento A05 - Piano Primo" />
                <p style={{textAlign: 'center', marginTop: '0.5rem', fontWeight: 'bold', color: '#2C5F7E'}}>
                  A05 - Piano Primo
                </p>
              </div>
              <div className="gallery-item">
                <img src="/images/excelsior-a06.jpg" alt="Appartamento A06 - Piano Primo" />
                <p style={{textAlign: 'center', marginTop: '0.5rem', fontWeight: 'bold', color: '#2C5F7E'}}>
                  A06 - Piano Primo
                </p>
              </div>
              <div className="gallery-item">
                <img src="/images/excelsior-a07.jpg" alt="Appartamento A07 - Piano Primo" />
                <p style={{textAlign: 'center', marginTop: '0.5rem', fontWeight: 'bold', color: '#2C5F7E'}}>
                  A07 - Piano Primo
                </p>
              </div>
              <div className="gallery-item">
                <img src="/images/excelsior-a08.jpg" alt="Appartamento A08 - Piano Primo" />
                <p style={{textAlign: 'center', marginTop: '0.5rem', fontWeight: 'bold', color: '#2C5F7E'}}>
                  A08 - Piano Primo
                </p>
              </div>
            </div>
          </div>

          {/* PIANO SECONDO - A09-A12 */}
          <div>
            <h3 style={{color: '#2C5F7E', marginBottom: '1.5rem'}}>Piano Secondo - Trilocali e Quadrilocali</h3>
            <div className="gallery-grid">
              <div className="gallery-item">
                <img src="/images/excelsior-a09.jpg" alt="Appartamento A09 - Piano Secondo" />
                <p style={{textAlign: 'center', marginTop: '0.5rem', fontWeight: 'bold', color: '#2C5F7E'}}>
                  A09 - Piano Secondo
                </p>
              </div>
              <div className="gallery-item">
                <img src="/images/excelsior-a10.jpg" alt="Appartamento A10 - Piano Secondo" />
                <p style={{textAlign: 'center', marginTop: '0.5rem', fontWeight: 'bold', color: '#2C5F7E'}}>
                  A10 - Piano Secondo
                </p>
              </div>
              <div className="gallery-item">
                <img src="/images/excelsior-a11.jpg" alt="Appartamento A11 - Piano Secondo" />
                <p style={{textAlign: 'center', marginTop: '0.5rem', fontWeight: 'bold', color: '#2C5F7E'}}>
                  A11 - Piano Secondo
                </p>
              </div>
              <div className="gallery-item">
                <img src="/images/excelsior-a12.jpg" alt="Appartamento A12 - Piano Secondo" />
                <p style={{textAlign: 'center', marginTop: '0.5rem', fontWeight: 'bold', color: '#2C5F7E'}}>
                  A12 - Piano Secondo
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="map-section">
          <h2>Posizione</h2>
          <p style={{marginBottom: '1.5rem', color: '#666'}}>
            Via Marzabotto, 7 - 20864 Agrate Brianza (MB) • Metro M2 a 5 minuti
          </p>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.5!2d9.35!3d45.56!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDMzJzM2LjAiTiA5wrAyMScwMC4wIkU!5e0!3m2!1sit!2sit!4v1234567890"
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

        <section className="cta-section">
          <h2>Interessato a Excelsior Living?</h2>
          <p>Contattaci per maggiori informazioni, prezzi e per prenotare una visita</p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem'}}>
            <a href="/contatti" className="cta-button">Contattaci</a>
            <a href="mailto:agrate@smliving.it" className="cta-button">Invia Email</a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ExcelsiorLiving;"Update Excelsior Living with floor plans A01-A12"
