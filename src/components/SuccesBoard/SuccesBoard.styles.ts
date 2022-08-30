import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 90vh;

    h1{
        text-align: center;
        margin-bottom: 10px;
    }
    p{
        margin-bottom: 20px;
    }

    ${({theme}) => theme.mq.desktop}{
        height: 80vh;
    }

`

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5px;

    ${({theme}) => theme.mq.desktop}{
        flex-direction: row;
        gap: 10px;
    }

`