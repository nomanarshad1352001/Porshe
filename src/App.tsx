import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import Models from './pages/Models';
import ModelDetail from './pages/ModelDetail';
import Services from './pages/Services';
import Experience from './pages/Experience';
import Platform from './pages/Platform';
import Specification from './pages/Specification';

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-[#0b0b0b] selection:bg-[#d5001c] selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/models" element={<Models />} />
            <Route path="/models/:slug" element={<ModelDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/specification" element={<Specification />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
