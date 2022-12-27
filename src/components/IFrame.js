import {
    Container
} from '../styles/ProjectCardStyles';
import { isMobile } from 'react-device-detect';

function IFrame({ project }) {

    return (
        <Container>
            <iframe title={project.name} src={project.video.embed_code} style={{ height: isMobile ? '26.1vh' : '41.5vh', width: isMobile ? '100vw' : '34vw', alignContent: 'center', border: '2px solid #919497' }}></iframe>
        </Container>
    )
}

export default IFrame;