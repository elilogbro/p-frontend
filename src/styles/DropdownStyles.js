import styled from 'styled-components';

export const Container = styled.div`
    top: 100%;
    left: 0;
    z-index: 2;
    width: auto;
    text-align: left;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;
export const ListItem = styled.li`
    padding: 4px 4px;
    background-color: transparent;
    color: white;
    &:hover{
        cursor: pointer;
        color: #6819fc;
    }
`;

export const Row = styled.div`
    justify-content: center;
`;