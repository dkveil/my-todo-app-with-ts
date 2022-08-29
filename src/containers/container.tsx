import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100vw;
    min-height: 100vh;
`

export const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    background-color: ${({ theme }) => theme.color.bgapp};
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: calc(100vw - 32px);
    margin: 0 auto;

    ${({theme}) => theme.mq.tablet}{
        width: calc(100vw - 64px);
    }
    ${({theme}) => theme.mq.desktop}{
        width: calc(100% - 64px);
    }
`
