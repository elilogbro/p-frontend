import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import {
    Container
} from '../styles/ProjectsContainerStyles';
import { IsMobileContext } from '../context/IsMobileContext';
import MobileProjectsContainer from '../mobile-components/MobileProjectsContainer';

function ProjectsContainer() {

    const { isMobile } = useContext(IsMobileContext);

    let location = useLocation();
    const [projects, setProjects] = useState(null);

    const url = 'https://fierce-tundra-23591.herokuapp.com/projects'

    useEffect(() => {

        fetch(`${url}`, {
            mode: 'no-cors'
        })
            .then(res => res.json())
            .then(projects => setProjects(projects))
    }, [location]
    )

    if (isMobile) {
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