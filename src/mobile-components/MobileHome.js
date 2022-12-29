import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillMediumCircle } from 'react-icons/ai';
import { BsDownload } from 'react-icons/bs';
import {
    Button
} from '../styles/HomeStyles';
import {
    Container,
    Row,
    Image,
    Column,
    LinksContainer
} from '../mobile-styles/MobileHomeStyles';

function MobileHome() {

    return (
        <Container>
            <Image
                src={'/me.jpg'}
                alt="me"
            />
            <Row>
                <h3><strong>Hi there! I'm <span style={{ color: "#6819fc" }}>Eliott</span></strong> Brown</h3>
                <h4 style={{ color: '#919497', fontFamily: 'Roboto Condensed, sans-serif' }}>A <strong><span style={{ color: "#6819fc" }}>Full-Stack Software Engineer</span></strong> passionate about creating unique software solutions</h4>
                <LinksContainer>
                    <Column>
                        <a
                            href={'/resume.pdf'}
                            download="EliottBrownResume"
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                textDecoration: 'none',
                                color: 'black'
                            }}
                        >
                            <Button mobile="true">
                                Resume <BsDownload style={{ verticalAlign: 'bottom' }} />
                            </Button>
                        </a>
                    </Column>
                    <Column>
                        <a href="https://github.com/elilogbro">
                            <AiFillGithub className="mobile-icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/eli-in-tech/">
                            <AiFillLinkedin className="mobile-icon" />
                        </a>
                        <a href="https://medium.com/@elilogbro">
                            <AiFillMediumCircle className="mobile-icon" />
                        </a>
                    </Column>
                </LinksContainer>
            </Row>
        </Container>
    )
}

export default MobileHome;