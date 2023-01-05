import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import ContactInfo from './ContactInfo';
import Navigation from './Navigation';
import About from './About';
import ProjectsContainer from './ProjectsContainer';
import Container from 'react-bootstrap/Container';
import Resume from './Resume';
import useMediaQuery from '../hooks/useMediaQuery';
import { LandscapeContext } from '../context/LandscapeContext';

function App() {

  const isMobile = useMediaQuery('(max-width: 480px)');
  const { landscape } = useContext(LandscapeContext);

  return (
    <div className="app-container">
      <Navigation />
      <Container className={(isMobile && !landscape) ? "mobile-routes-container" : "routes-container"}>
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
