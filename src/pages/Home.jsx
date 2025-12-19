import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      {/* Logo Section */}
      <div className="logo-container">
        <Link to="/">
          <img 
            src="/images/logos/sm-living-logo.png" 
            alt="SM Living - La tua casa oltre l'ordinario" 
            style={{
              maxWidth: '200px',
              height: 'auto',
              display: 'block',
              margin: '0 auto'
            }}
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/excelsior-living">EXCELSIOR LIVING</Link></li>
          <li><Link to="/lilium-living">LILIUM LIVING</Link></li>
          <li><Link to="/chi-siamo">CHI SIAMO</Link></li>
          <li><Link to="/contatti">CONTATTI</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;"Update Home with new design"
