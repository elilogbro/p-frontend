import { Container } from '../styles/ResumeStyles';

function Resume() {

    return (
        <Container>
            <object data={'/resume.pdf'} type="application/pdf" width="100%" height="100%">
            </object>
        </Container>
    )
}

export default Resume;