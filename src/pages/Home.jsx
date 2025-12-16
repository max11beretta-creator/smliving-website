import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>SM Living</h1>
        <p>Sviluppo immobiliare di qualità in Brianza. Residenze esclusive dove design, comfort e sostenibilità si incontrano.</p>
        <Link to="/contatti" className="cta-button">Richiedi Informazioni</Link>
      </section>

      <section className="projects-section">
        <h2 className="section-title">I Nostri Progetti</h2>
        <div className="projects-grid">
          
          <Link to="/excelsior-living" className="project-card">
            <img 
              src="/images/excelsior-exterior.jpg" 
              alt="Residenza Excelsior Living"
              className="project-image"
            />
            <div className="project-content">
              <h3>Residenza Excelsior Living</h3>
              <p>24 unità abitative di design ad Agrate Brianza. Modernità, eleganza e sostenibilità in una posizione strategica.</p>
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
