import { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Services from './pages/Services';
import CaseStudies from './pages/CaseStudies';
import CaseStudy from './pages/CaseStudy';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';

import './App.scss';

// The resume names past employers. It is loaded on demand so those names are
// not part of the bundle every visitor downloads.
const Resume = lazy(() => import('./pages/Resume'));

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Navigate to="/services" replace />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:slug" element={<CaseStudy />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
