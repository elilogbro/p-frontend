import {
    Container,
    List,
    ListItem
} from '../styles/DropdownStyles';
import { ImArrowRight } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from './hooks/useMediaQuery';

function Dropdown() {

    const isMobile = useMediaQuery('(max-width: 767px)');

    let navigate = useNavigate();

    const redirectToResume = () => {
        navigate('/resume');
    };

    return (
        <Container>
            {isMobile ?
                <List>
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
                        <ListItem><ImArrowRight style={{ marginRight: '1vw' }} />Download</ListItem>
                    </a>
                </List>
                :
                <List>
                    <ListItem onClick={redirectToResume}><ImArrowRight style={{ marginRight: '1vw' }} />View</ListItem>
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
                        <ListItem><ImArrowRight style={{ marginRight: '1vw' }} />Download</ListItem>
                    </a>
                </List>
            }
        </Container>
    )
}

export default Dropdown;