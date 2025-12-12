import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ExcelsiorLiving from './pages/ExcelsiorLiving';
import LiliumLiving from './pages/LiliumLiving';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/excelsior-living" element={<ExcelsiorLiving />} />
          <Route path="/lilium-living" element={<LiliumLiving />} />
          <Route path="/chi-siamo" element={<About />} />
          <Route path="/contatti" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
