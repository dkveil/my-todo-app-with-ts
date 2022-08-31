import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    min-height: 100vh;
`

export const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    background-color: ${({ theme }) => theme.color.bgapp};

    ${({theme}) => theme.mq.desktop}{
        max-width: calc(100% - 400px);
        height: 100vh;
        overflow: hidden;
        overflow-y: scroll;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: calc(100vw - 42px);
    margin: 0 auto;
    height: inherit;
    min-height: inherit;

    ${({theme}) => theme.mq.tablet}{
        width: calc(100vw - 64px);
    }
    ${({theme}) => theme.mq.desktop}{
        width: calc(100% - 128px);
    }
`
