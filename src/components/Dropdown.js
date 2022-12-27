import React, { useState } from 'react';
import {
    Container,
    List,
    ListItem,
    ModalContainer
} from '../styles/DropdownStyles';
import { Button } from '../styles/HomeStyles';
import Popup from 'reactjs-popup';
import { ImArrowRight } from 'react-icons/im';

function Dropdown({ mobile }) {

    const [open, setOpen] = useState(false);

    return (
        <Container>
            <List>
                <ListItem onClick={() => setOpen(true)}><ImArrowRight style={{ marginRight: '1vw' }} />View</ListItem>
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
                        <object data={'/resume.pdf'} type="application/pdf" width="100%" height="100%">
                        </object>
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
                    <ListItem><ImArrowRight style={{ marginRight: '1vw' }} />Download</ListItem>
                </a>
            </List>
        </Container>
    )
}

export default Dropdown;