import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ContactInfo from './components/ContactInfo';
import Navigation from './components/Navigation';
import About from './components/About';
import ProjectsContainer from './components/ProjectsContainer';
import Container from 'react-bootstrap/Container';
import { isMobile } from 'react-device-detect';
import Resume from './components/Resume';

function App() {

  return (
    <div className="app-container">
      <Navigation />
      <Container className={isMobile ? "mobile-routes-container" : "routes-container"}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<ContactInfo />} />
          <Route path='/projects' element={<ProjectsContainer />} />
          <Route
            path="/resume"
            element={<Resume />}
          />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
