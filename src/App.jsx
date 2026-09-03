import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import SideDrawer from './components/SideDrawer';
import Footer from './components/Footer';

import Home from './pages/Home';
import Blog from './pages/Blog';
import Work from './pages/Work';
import Contact from './pages/Contact';

import './App.scss';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuMessage, setMenuMessage] = useState('ANTON BALOG');

  const toggleMenu = () => {
    setMenuOpen((isOpen) => !isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setMenuMessage(':)');
  };

  const menuLabel = menuOpen ? 'CLOSE' : 'MENU';

  return (
    <div className="App">
      <BrowserRouter>
        <Header
          active={menuOpen}
          activationHandler={toggleMenu}
          hoverHandler={setMenuMessage}
          labelHandler={menuLabel}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <SideDrawer active={menuOpen} hover={menuMessage}>
          {menuMessage}
        </SideDrawer>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;