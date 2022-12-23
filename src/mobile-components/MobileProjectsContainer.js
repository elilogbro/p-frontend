import MobileProjectCard from '../components/ProjectCard';
import {
    Container
} from '../mobile-styles/MobileProjectsContainerStyles';

function MobileProjectsContainer({projects}) {
    
    const renderProjects = projects && projects.map(project =>
        <MobileProjectCard key={project.id} project={project} />
    )

    return (
        <Container>
            {renderProjects}
        </Container>
    )
}

export default MobileProjectsContainer;