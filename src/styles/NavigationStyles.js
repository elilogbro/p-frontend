import styled from 'styled-components';

export const BrandContainer = styled.div`
    display: flex;
    padding-left: 8vw;
    font-size: medium;
`;

export const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2vw;
    align-items: center;
    padding-right: 6vw;
    min-weight: 50vw;
`;

export const MediaContainer = styled.div`
    display: flex;
    gap: 0;
    min-width: 8vw;
    min-height: 4vh;
    align-items: center;
`;

export const Navbar = styled.div`
    background-color: #0f1922;
    opacity: .92;
    min-height: 6vh;
    height: fit-content;
    width: 98%; 
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 2vh;
    position: fixed;
    justify-content: space-between;
    vertical-align: middle;
    top: 0;
    z-index: 10000000001;
    text-transform: uppercase;
    font-size: small;
    align-items: center;
`;

