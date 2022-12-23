import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    font-family: 'Roboto Condensed', sans-serif;
    height: 100%;
`;

export const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    min-height: 20vh;
    font-family: 'Roboto Condensed', sans-serif;
`;

export const Column = styled.div`
`;

export const Button = styled.button`
    display: inline-block;
    outline: none;
    cursor: pointer;
    width: fit-content;
    font-size: ${props => props.mobile ? "1.25em" : "0.9em"};
    line-height: 1;
    border-radius: 500px;
    transition-property: background-color,border-color,color,box-shadow,filter;
    transition-duration: .3s;
    border: 1px solid transparent;
    letter-spacing: 2px;
    text-transform: uppercase;
    white-space: normal;
    font-weight: 700;
    text-align: center;
    vertical-align: middle;
    padding: ${props => props.mobile ? "1vw 2vw" : "10px 14px"};
    color: #0f1922;
    background-color: white;
    height: 48px;
    :hover{
        color: #fff;
        background-color: transparent;
        border-color: #6819fc;
        outline: 0;
        box-shadow: 0 0 0 0.25rem rgb(104 25 252 / 25%);
    }
    margin-right: ${props => props.modal && "0.5em"};
    margin-top: ${props => props.modal && "0.2em"};
    margin: ${props => props.mobile && '0.6vh'};
`;