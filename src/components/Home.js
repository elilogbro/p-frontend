import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import { HiViewList } from 'react-icons/hi';
import Dropdown from './Dropdown';
import {
    Container,
    LinksContainer,
    Button
} from '../styles/HomeStyles';
import MobileHome from '../mobile-components/MobileHome';
import { isMobile } from 'react-device-detect';

function Home() {

    const [clicked, setClicked] = useState(false);

    const handleButtonClick = () => {
        setClicked(!clicked)
    }

    if (isMobile) {
        return <MobileHome />
    }

    return (
        <Container>
            <Col className="text-center">
                <Image
                    roundedCircle
                    fluid
                    src={'/me.jpg'}
                    alt="me"
                    className="image"
                />
                <Col className="details-container">
                    <h3><strong>Hi there! I'm <span style={{ color: "#6819fc" }}>Eliott</span></strong> Brown</h3>
                    <h4 style={{ color: '#919497', fontFamily: 'Roboto Condensed, sans-serif' }}>A <strong><span style={{ color: "#6819fc" }}>Full-Stack Software Engineer</span></strong> passionate about creating unique software solutions</h4>
                    <LinksContainer>
                        <Button onClick={handleButtonClick}>
                            Resume <HiViewList style={{ verticalAlign: 'top' }} />
                        </Button>
                        {clicked && <Dropdown mobile="false" />}
                    </LinksContainer>
                </Col>
            </Col>
        </Container>
    )
}

export default Home;