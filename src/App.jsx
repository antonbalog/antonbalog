import React, { useState }  from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Layout from './components/Layout';
import Header from './components/Header'
import SideDrawer from './components/SideDrawer';
import Footer from './components/Footer'; 

import Home from './pages/Home';
import Blog from './pages/Blog';
import Work from './pages/Work';
import Contact from './pages/Contact';

import './App.scss';

const App = () => {
  const [active, activate] = useState(false);

  const activation = () => {
    return activate(!active);
  };

  const [hover, hovered] = useState(':)');

  const hovering = (hover) => {
    return hovered(hover);
  };

  let label;

  if (active) {
    label = 'CLOSE';
  } else {
    label = 'MENU';
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header 
          active={active}
          activationHandler={activation}
          labelHandler={label}
          hoverHandler={hovering}
        />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/work' element={<Work />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <SideDrawer active={active} hover={hover}>{hover}</SideDrawer>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
