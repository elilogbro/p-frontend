import React, { useState } from 'react';
import {
    Container,
    List,
    ListItem,
    ModalContainer,
    TextContainer
} from '../styles/DropdownStyles';
import { Button } from '../styles/HomeStyles';
import Popup from 'reactjs-popup';
import { ImArrowRight } from 'react-icons/im';

function Dropdown({mobile}) {

    const [open, setOpen] = useState(false);

    return (
        <Container>
            <List>
                <ListItem onClick={() => setOpen(true)}><ImArrowRight style={{marginRight: '1vw'}}/>View</ListItem>
                <Popup
                    open={open}
                    // modal
                    nested
                    >
                    <ModalContainer>
                        <Button
                            modal="true"
                            onClick={() => setOpen(false)}
                        >
                            X
                        </Button>
                        {mobile ?
                            <object data={'/resume.pdf'} type="application/pdf" width="100%" height="100%">
                                <TextContainer>
                                    <p style={{width: 'fit-content', fontSize: 'large'}}>Unable to load on your mobile device, use <a href="https://www.linkedin.com/in/eli-in-tech/overlay/1635508967519/single-media-viewer/">this link!</a></p>
                                </TextContainer>
                            </object> :
                            <div></div>
                        }
                    </ModalContainer>
                </Popup>
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
                    <ListItem><ImArrowRight style={{marginRight: '1vw'}}/>Download</ListItem>
                </a>
            </List>
        </Container>
    )
}

export default Dropdown;