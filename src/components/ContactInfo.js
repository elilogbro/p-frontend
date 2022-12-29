import { useState } from 'react';
import emailjs from 'emailjs-com';
import {
    Container,
    Input,
    Row,
    Column,
    MessageInput,
    Button,
    Required,
    Right,
    Left,
    Error,
    Link
} from '../styles/ContactInfoStyles';
import { MdOutlineMailOutline } from 'react-icons/md';
import MobileContactInfo from '../mobile-components/MobileContactInfo';
import useMediaQuery from './hooks/useMediaQuery';

function ContactInfo() {

    const isMobile = useMediaQuery('(max-width: 767px)');

    const initialFormData = {
        from_name: "",
        from_email: "",
        message: ""
    };

    const falsyFormData = {
        from_name: false,
        from_email: false,
        message: false
    }

    const [formData, setFormData] = useState(initialFormData);
    const [errorLocation, setErrorLocation] = useState(falsyFormData);

    if (isMobile) {
        return <MobileContactInfo />
    }

    const handleFormChange = (e) => {
        const key = e.target.name
        const value = e.target.value

        if (formData[key] !== "") {
            setErrorLocation({ ...errorLocation, [key]: false })
        }

        setFormData({ ...formData, [key]: value })
    };

    const isValid = Boolean(formData.from_name !== "" && formData.from_email !== "" && formData.message !== "");

    function sendEmail(e) {
        e.preventDefault();

        if (isValid) {
            emailjs.sendForm('service_v3bpdl8', 'template_4nl0spn', e.target, 'EhI_xZcAYhshS9nyo')
                .then(() => {
                    setFormData(initialFormData);
                });
        };
    };

    const handleErrors = (e) => {
        const currentKey = e.target.name

        if (formData[currentKey] === "") {
            setErrorLocation({ ...errorLocation, [currentKey]: true })
        }

    }

    return (
        <Container>
            <Left>
                <h3 style={{ color: '#6819fc', textTransform: 'uppercase' }}>Contact</h3>
                <h1>Looking for a new developer or just want to chat?</h1>
                <p style={{ color: '#919497', fontSize: 'large' }}>Send me a message to get the process started.</p>
                <Link href="mailto:elilogbro@gmail.com">
                    <MdOutlineMailOutline
                        style={{
                            fontSize: '1.25em',
                            marginRight: '0.5vw'
                        }}
                    />
                    elilogbro@gmail.com
                </Link>
            </Left>
            <Right onSubmit={sendEmail}>
                <Row>
                    <Column>
                        <label>Name <Required>*</Required></label>
                        <Input
                            type="text"
                            name="from_name"
                            value={formData.from_name}
                            onChange={handleFormChange}
                            onClick={handleErrors}
                            error={errorLocation.from_name && "true"}
                        />
                        <Error>{errorLocation.from_name && "Name is empty."}</Error>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <label>Email <Required>*</Required></label>
                        <Input
                            type="email"
                            name="from_email"
                            value={formData.from_email}
                            onChange={handleFormChange}
                            onClick={handleErrors}
                            error={errorLocation.from_email && "true"}
                        />
                        <Error>{errorLocation.from_email && "Email is empty."}</Error>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <label>Message <Required>*</Required></label>
                        <MessageInput
                            type="text"
                            name="message"
                            value={formData.message}
                            onChange={handleFormChange}
                            onClick={handleErrors}
                            error={errorLocation.message && "true"}
                        />
                        <Error>{errorLocation.message && "Message is empty."}</Error>
                    </Column>
                </Row>
                <Button type="submit" disabled={!isValid}>Send</Button>
            </Right>
        </Container>
    )
}

export default ContactInfo;