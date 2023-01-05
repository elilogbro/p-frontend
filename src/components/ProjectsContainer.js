import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import {
    Container
} from '../styles/ProjectsContainerStyles';
import MobileProjectsContainer from '../mobile-components/MobileProjectsContainer';
import useMediaQuery from '../hooks/useMediaQuery';
import { LandscapeContext } from '../context/LandscapeContext';

function ProjectsContainer() {

    const isMobile = useMediaQuery('(max-width: 480px)');
    const { landscape } = useContext(LandscapeContext);

    let location = useLocation();

    const [projects, setProjects] = useState(null);

    useEffect(() => {

        fetch("https://fierce-tundra-23591.herokuapp.com/projects")
            .then(res => res.json())
            .then(projects => setProjects(projects))
    }, [location]
    )

    if (isMobile && !landscape) {
        return (<MobileProjectsContainer projects={projects} />)
    }

    const renderProjects = projects && projects.map(project =>
        <ProjectCard key={project.id} project={project} />
    )

    return (
        <Container>
            {renderProjects}
        </Container>
    )
}

export default ProjectsContainer;