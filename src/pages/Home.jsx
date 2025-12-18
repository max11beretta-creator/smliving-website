import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>SM LIVING</h1>
          <p>Sviluppo Immobiliare di Qualità in Brianza</p>
          <p className="hero-subtitle">
            Realizziamo progetti residenziali innovativi ed efficienti, 
            con particolare attenzione alla sostenibilità e al comfort abitativo.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-center" style={{marginBottom: '3rem'}}>I Nostri Progetti</h2>
        
        <div className="projects-grid">
          {/* Excelsior Living */}
          <Link to="/excelsior-living" className="project-card">
            <img 
              src="/images/excelsior-exterior.jpg" 
              alt="Residenza Excelsior Living"
              className="project-image"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/800x500/3C4F5E/FFFFFF?text=Excelsior+Living';
              }}
            />
            <div className="project-content">
              <h3>Residenza Excelsior Living</h3>
              <p style={{fontSize: '0.95rem', lineHeight: '1.7'}}>
                24 unità abitative moderne ad Agrate Brianza. Trilocali da 108 a 117 mq e 
                Quadrilocali da 122 a 138 mq con finiture di pregio e classe energetica A4.
              </p>
              <div className="project-details">
                <div className="detail-item">
                  <span>📍</span>
                  <span>Agrate Brianza</span>
                </div>
                <div className="detail-item">
                  <span>🏢</span>
                  <span>24 unità</span>
                </div>
                <div className="detail-item">
                  <span>📐</span>
                  <span>108-138 mq</span>
                </div>
                <div className="detail-item">
                  <span>⏳</span>
                  <span>Inizio: Feb 2026</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Lilium Living */}
          <Link to="/lilium-living" className="project-card">
            <img 
              src="/images/lilium-exterior.jpg" 
              alt="Residenza Lilium Living"
              className="project-image"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/800x500/0D4D4D/FFFFFF?text=Lilium+Living';
              }}
            />
            <div className="project-content">
              <h3>Residenza Lilium Living</h3>
              <p style={{fontSize: '0.95rem', lineHeight: '1.7'}}>
                6 quadrilocali esclusivi a Bellusco. Residenze di prestigio da 134 a 160 mq, 
                immerse nel verde con giardini fino a 150 mq e finiture di alta qualità.
              </p>
              <div className="project-details">
                <div className="detail-item">
                  <span>📍</span>
                  <span>Bellusco</span>
                </div>
                <div className="detail-item">
                  <span>🏢</span>
                  <span>6 unità</span>
                </div>
                <div className="detail-item">
                  <span>📐</span>
                  <span>134-160 mq</span>
                </div>
                <div className="detail-item">
                  <span>⏳</span>
                  <span>Inizio: Feb 2026</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-with-bg">
        <div style={{maxWidth: '900px', margin: '0 auto', textAlign: 'center'}}>
          <span className="label-category">CHI SIAMO</span>
          <h2 className="title-gold">
            Innovazione, stile ed eleganza per un concept abitativo moderno.
          </h2>
          <p style={{marginBottom: '2rem', fontSize: '1.05rem'}}>
            SM Living - Santa Marta S.r.l. è specializzata nello sviluppo di progetti 
            immobiliari residenziali di alta qualità in Brianza. Con attenzione ai 
            dettagli e all'efficienza energetica, realizziamo abitazioni che combinano 
            comfort, design e sostenibilità.
          </p>
          <Link to="/chi-siamo" className="cta-button">SCOPRI DI PIÙ</Link>
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

export default Home;
