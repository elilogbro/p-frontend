import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { BiHome } from 'react-icons/bi';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { AiOutlineAppstore } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';

function MobileNavigation() {

    return (
        <Navbar className="navbar-mobile" id="navbar">
            <Nav.Item>
                <LinkContainer to="/">
                    <Nav.Link>
                        <BiHome
                            style={{
                                color: 'white',
                                height: '10vh',
                                width: '10vw',
                                margin: '2vw'
                            }}
                        />
                    </Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="/projects">
                    <Nav.Link>
                        <AiOutlineAppstore
                            style={{
                                color: 'white',
                                height: '10vh',
                                width: '10vw',
                                margin: '2vw'
                            }}
                        />
                    </Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="/about">
                    <Nav.Link>
                        <MdOutlinePersonOutline
                            style={{
                                color: 'white',
                                height: '10vh',
                                width: '10vw',
                                margin: '2vw'
                            }}
                        />
                    </Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="/contact">
                    <Nav.Link>
                        <AiOutlinePhone
                            style={{
                                color: 'white',
                                height: '10vh',
                                width: '10vw',
                                margin: '2vw'
                            }}
                        />
                    </Nav.Link>
                </LinkContainer>
            </Nav.Item>
        </Navbar>
    )
}

export default MobileNavigation;