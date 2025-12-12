function About() {
  return (
    <div className="about-section">
      <div className="about-content">
        <h2>Chi Siamo</h2>
        <p>
          <strong>SM Living</strong> è il brand di sviluppo immobiliare di <strong>Santa Marta S.r.l.</strong>, 
          realtà attiva nella Brianza con una solida esperienza nel settore dello sviluppo residenziale di qualità.
        </p>
        <p>
          La nostra missione è creare residenze che uniscano design contemporaneo, sostenibilità ambientale 
          e comfort abitativo, rispondendo alle esigenze di chi cerca una casa moderna e di qualità.
        </p>
        <p>
          Seguiamo ogni progetto dall'acquisizione del terreno fino alla consegna delle chiavi, 
          garantendo standard elevati in ogni fase: dalla progettazione architettonica alla scelta 
          dei materiali, dalla costruzione alle finiture.
        </p>
        
        <div style={{marginTop: '3rem', padding: '2rem', background: '#f8f9fa', borderRadius: '15px'}}>
          <h3 style={{marginBottom: '1.5rem', color: '#1a365d'}}>I Nostri Valori</h3>
          <div className="features-grid">
            <div className="feature-item">
              <span className="feature-icon">🎯</span>
              <span><strong>Qualità</strong> - Standard elevati in ogni dettaglio</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🌱</span>
              <span><strong>Sostenibilità</strong> - Edifici in classe energetica A+</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🏗️</span>
              <span><strong>Professionalità</strong> - Esperienza e competenza comprovata</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🤝</span>
              <span><strong>Trasparenza</strong> - Rapporto diretto e chiaro con i clienti</span>
            </div>
          </div>
        </div>

        <p style={{marginTop: '2rem'}}>
          Operando principalmente nella zona della Brianza, conosciamo approfonditamente il territorio 
          e le sue potenzialità, selezionando le migliori location per i nostri progetti residenziali.
        </p>
      </div>
    </div>
  );
}

export default About;
