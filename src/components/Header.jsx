import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <nav className="nav-container">
        <Link to="/" className="logo">SM Living</Link>
        <ul className="nav-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/excelsior-living">Excelsior Living</Link></li>
          <li><Link to="/lilium-living">Lilium Living</Link></li>
          <li><Link to="/chi-siamo">Chi Siamo</Link></li>
          <li><Link to="/contatti">Contatti</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
