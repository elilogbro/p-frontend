import { AiFillGithub } from 'react-icons/ai';
import IFrame from '../components/IFrame';
import {
    Container,
    SubContainer,
    SubContainer2
} from '../mobile-styles/MobileProjectCardStyles';
import { FaReact } from 'react-icons/fa';
import { SiRubyonrails } from 'react-icons/si';
import { VscJson } from 'react-icons/vsc';
import { DiRuby } from 'react-icons/di';
import { FaRedhat } from 'react-icons/fa';
import { FaCookieBite } from 'react-icons/fa';
import Typewriter from "typewriter-effect";

function MobileProjectCard({ project }) {

    const findLogo = (technology) => {
        switch (technology.name) {
            case 'React.js':
                return <FaReact className="logo" />
            case 'Ruby on Rails':
                return <SiRubyonrails className="logo" />
            case 'Custom db.json':
                return <VscJson className="logo" />
            case 'Ruby':
                return <DiRuby className="logo" />
            case 'Sinatra':
                return <FaRedhat className="logo" />
            case 'User Authentication':
                return <FaCookieBite className="logo" />
            case 'Styled Components':
                return null
            default:
                return <p>{technology.name}</p>
        }
    }


    const renderTechnologies = project && project.technologies.map(technology =>
        findLogo(technology)
    )

    return (
        <Container>
            <IFrame project={project} />
            <SubContainer2>
                {renderTechnologies}
            </SubContainer2>
            <SubContainer>
                <h2 style={{ fontFamily: 'Azeret Mono, monospace', color: '#6819fc' }}>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString(project.name)
                                .start();
                        }}
                    />
                </h2>
                <p style={{ fontFamily: 'Roboto Condensed, sans-serif' }}>{project.details}</p>
                <a href={project.github_url}>
                    <AiFillGithub className="icon" style={{ width: '40vw', height: '8vh' }} />
                </a>
            </SubContainer>
        </Container>
    )
}

export default MobileProjectCard;