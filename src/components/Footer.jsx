import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div style={{marginBottom: '2rem'}}>
          <h3 style={{color: 'white', marginBottom: '1rem'}}>SM Living - Santa Marta S.r.l.</h3>
          <p style={{color: 'rgba(255,255,255,0.8)', lineHeight: '1.8'}}>
            Sviluppo Immobiliare di Qualità in Brianza<br />
            <br />
            📧 <a href="mailto:info@smliving.it" style={{color: 'white', textDecoration: 'none'}}>info@smliving.it</a><br />
            📱 <a href="tel:+393467854342" style={{color: 'white', textDecoration: 'none'}}>+39 346 785 4342</a><br />
            ☎️ <a href="tel:+390396388196" style={{color: 'white', textDecoration: 'none'}}>+39 039 638 8196</a><br />
            <br />
            📍 Via Santa Marta, 5 - 20871 Vimercate (MB)<br />
            <br />
            P.IVA: 04106340963 | REA: MB-1726317
          </p>
        </div>
        
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/excelsior-living">Excelsior Living</Link>
          <Link to="/lilium-living">Lilium Living</Link>
          <Link to="/chi-siamo">Chi Siamo</Link>
          <Link to="/contatti">Contatti</Link>
          <a href="https://www.instagram.com/smlivingsrl/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com/smlivingsrl" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
        
        <p style={{marginTop: '2rem'}}>&copy; 2024 SM Living - Santa Marta S.r.l. Tutti i diritti riservati.</p>
        <p style={{fontSize: '0.9rem', marginTop: '0.5rem'}}>Sviluppo immobiliare di qualità in Brianza</p>
      </div>
    </footer>
  );
}

export default Footer;
