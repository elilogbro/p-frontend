import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Video from './components/Video';
import ContactInfo from './components/ContactInfo';
import Navigation from './components/Navigation';
import About from './components/About';
import ProjectsContainer from './components/ProjectsContainer';
import Container from 'react-bootstrap/Container';
import { IsMobileContext } from './context/IsMobileContext';

function App() {

  const { isMobile } = useContext(IsMobileContext);

  return (
    <div className="app-container">
      <Navigation />
      <Container className={isMobile ? "mobile-routes-container" : "routes-container"}>
        <Routes>
          <Route
            path='/'
            element={
              <Home />
            }
          />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<ContactInfo />} />
          <Route
            path='/projects'
            element={
              <ProjectsContainer />
            }
          />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
