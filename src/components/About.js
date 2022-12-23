import { useContext } from 'react';
import {
    Image,
    Container,
    Header,
    SubContainer
} from '../styles/AboutStyles';
import { IsMobileContext } from '../context/IsMobileContext';
import MobileAbout from '../mobile-components/MobileAbout';

function About() {

    const { isMobile } = useContext(IsMobileContext);

    if (isMobile) {
        return <MobileAbout />
    }
    
    return (
        <Container>
            <Header>
                <h3 style={{color: "#6819fc"}}><strong>Who is Eliott Brown?</strong></h3>
                <p>A curious Full Stack Software Engineer who is passionate about the Frontend and is constantly trying to further himself.</p>
            </Header>
            <SubContainer>
                <Image src={'/mewithhenry.jpg'} alt="hiking with my dog, Henry" />
                <div>
                    <p>Hi! I’m Eliott, a Full Stack Software Engineer currently residing in Chattanooga, TN. I recently graduated from Flatiron School's Live Software Engineering Program and am now looking for my first role in this exciting field.</p>
                    <p>I've never been one to fit in a conventional box. My previous experience as a Trail Crew Leader for Southwest Conservation Corps involved camping full-time while fostering an inclusive and fun atmosphere to promote personal growth for my crew members and myself. As this old path came to an end due to an injury, I discovered an unknown love for the puzzle-like aspect of programming. I look forward to the infinite opportunities to improve upon technical and interpersonal skills as a Software Engineer.</p>
                    <p>If I labelled myself something other than a Developer, I am a dog dad above all. Henry and I enjoy our time hiking and camping wherever we find ourselves! I am a rock climber/boulderer who mostly frequents gyms but isn't afraid to hit Mother Nature's crags either. I’m also a foodie and love learning how to make new dishes and baked goods. Aside from that, I'm a sucker for Folk music and enjoy playing guitar to my favorite Gregory Alan Isakov songs.</p>
                </div>
            </SubContainer>
        </Container>
    )
}

export default About;