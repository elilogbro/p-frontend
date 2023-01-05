
import React, { useContext } from 'react';
import {
    Container
} from '../styles/ProjectCardStyles';
import useMediaQuery from '../hooks/useMediaQuery';
import { LandscapeContext } from '../context/LandscapeContext';


function IFrame({ project }) {

    const isMobile = useMediaQuery('(max-width: 480px)');
    const { landscape } = useContext(LandscapeContext);

    return (
        <Container>
            <iframe title={project.name} src={project.video.embed_code} style={{ height: (isMobile && !landscape) ? '26.1vh' : '41.5vh', width: (isMobile && !landscape) ? '100vw' : '34vw', alignContent: 'center', border: '2px solid #919497' }}></iframe>
        </Container>
    )
}

export default IFrame;