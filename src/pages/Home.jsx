import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>SM Living</h1>
          <p>Sviluppo Immobiliare di Qualità in Brianza</p>
          <p className="hero-subtitle">
            Realizziamo progetti residenziali innovativi ed efficienti, 
            con particolare attenzione alla sostenibilità e al comfort abitativo.
          </p>
        </div>
      </section>

      <section className="projects">
        <h2>I Nostri Progetti</h2>
        <div className="projects-grid">
          <Link to="/excelsior-living" className="project-card">
            <img 
              src="/images/excelsior-exterior.jpg" 
              alt="Residenza Excelsior Living"
              className="project-image"
            />
            <div className="project-content">
              <h3>Residenza Excelsior Living</h3>
              <p>24 unità abitative moderne ad Agrate Brianza. Trilocali da 108 a 117 mq e Quadrilocali da 122 a 138 mq con finiture di pregio e classe energetica A4.</p>
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

          <Link to="/lilium-living" className="project-card">
            <img 
              src="/images/lilium-exterior.jpg" 
              alt="Residenza Lilium Living"
              className="project-image"
            />
            <div className="project-content">
              <h3>Residenza Lilium Living</h3>
              <p>6 quadrilocali esclusivi a Bellusco. Residenze di prestigio da 134 a 160 mq, immerse nel verde con giardini fino a 150 mq e finiture di alta qualità.</p>
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

      <section className="about-preview">
        <h2>Chi Siamo</h2>
        <p>
          SM Living - Santa Marta S.r.l. è specializzata nello sviluppo di progetti 
          immobiliari residenziali di alta qualità in Brianza. Con attenzione ai 
          dettagli e all'efficienza energetica, realizziamo abitazioni che combinano 
          comfort, design e sostenibilità.
        </p>
        <Link to="/chi-siamo" className="cta-button">Scopri di più</Link>
      </section>
    </div>
  );
}

export default Home;"Fix closing div tag in Home.jsx"
