import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-flow: column;
    height: 100vh;
    text-align: center;
    margin-top: 4vh;
    padding-left: 4vw;
    padding-right: 4vw;
`;

export const LinksContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: baseline;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2vh;
`;

export const Column = styled.div`
    align-self: auto;
`;

export const Image = styled.img`
    width: 80vw;
    height: auto;
    border-radius: 50%;
    box-shadow: 0.8vw 0 0 0px #6819fc, 1.6vw 0 0 0px #3e0f97, 2.4vw 0 0 0px #273038;
    margin: 2em;
`;