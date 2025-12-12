import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/excelsior-living">Excelsior Living</Link>
          <Link to="/lilium-living">Lilium Living</Link>
          <Link to="/chi-siamo">Chi Siamo</Link>
          <Link to="/contatti">Contatti</Link>
        </div>
        <p>&copy; 2024 SM Living - Santa Marta S.r.l. Tutti i diritti riservati.</p>
        <p>Sviluppo immobiliare di qualità in Brianza</p>
      </div>
    </footer>
  );
}

export default Footer;
