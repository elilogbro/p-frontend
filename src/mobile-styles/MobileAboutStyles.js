import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    gap: 10vh;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const Image = styled.img`
    width: 100%;
    height: auto;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2vh;
    text-align: center;
    font-size: x-large;
    padding-left: 2vw;
    padding-right: 2vw;
`;

export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4vw;
    margin-bottom: 12vh;
    font-size: x-large;
    width: 100vw;
    text-align: center;
    padding-left: 10vw;
    padding-right: 10vw;
`;

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3vh;
    color: #919497;
`;