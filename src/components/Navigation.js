import { NavLink } from 'react-router-dom';
import MobileNavigation from '../mobile-components/MobileNavigation';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillMediumCircle } from 'react-icons/ai';
import {
    BrandContainer,
    NavContainer,
    MediaContainer,
    Navbar
} from '../styles/NavigationStyles';
import useMediaQuery from '../hooks/useMediaQuery';

function Navigation() {

    const isMobile = useMediaQuery('(max-width: 800px)');

    if (isMobile) {
        return <MobileNavigation />;
    }

    return (
        <Navbar>
            <BrandContainer>
                <NavLink to="/" className="brand-link">
                    <strong>Eliott</strong> Brown
                </NavLink>
            </BrandContainer>
            <NavContainer>
                <NavLink to="/projects" className="nav-link">
                    Projects
                </NavLink>
                <NavLink to="/about" className="nav-link">
                    About
                </NavLink>
                <NavLink to="/contact" className="nav-link">
                    Contact
                </NavLink>
                <MediaContainer>
                    <a href="https://github.com/elilogbro">
                        <AiFillGithub className="icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/eli-in-tech/">
                        <AiFillLinkedin className="icon" />
                    </a>
                    <a href="https://medium.com/@elilogbro">
                        <AiFillMediumCircle className="icon" />
                    </a>
                </MediaContainer>
            </NavContainer>
        </Navbar>
    )
}

export default Navigation;