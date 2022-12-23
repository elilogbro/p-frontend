import React, { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillMediumCircle } from 'react-icons/ai';
import { HiViewList } from 'react-icons/hi';
import Dropdown from '../components/Dropdown';
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

    const [clicked, setClicked] = useState(false);

    const handleButtonClick = () => {
        setClicked(!clicked)
    }

    return (
        <Container>
            <Image
                src={'/me.jpg'}
                alt="me"
            />
            <Row>
                <h3><strong>Hi there! I'm <span style={{color: "#6819fc"}}>Eliott</span></strong> Brown</h3>
                <h4 style={{color: '#919497', fontFamily: 'Roboto Condensed, sans-serif'}}>A <strong><span style={{color: "#6819fc"}}>Full-Stack Software Engineer</span></strong> passionate about creating unique software solutions</h4>
                <LinksContainer>
                    <Column>
                        <Button onClick={handleButtonClick} mobile="true">
                            Resume <HiViewList style={{verticalAlign: 'sub'}}/>
                        </Button>
                        {clicked && <Dropdown mobile="true"/>}
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