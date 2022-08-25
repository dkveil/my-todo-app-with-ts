import styled from "styled-components";

export const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100vw;

    ${({theme}) => theme.mq.desktop}{
        flex-direction: row;
    }
`

export const Container = styled.div`

`
