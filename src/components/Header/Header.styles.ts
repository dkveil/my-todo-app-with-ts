import styled from "styled-components";

export const Wrapper = styled.header`
    height: 100px;
    margin-top: ${({theme}) => theme.height.navbar};

    ${({theme}) => theme.mq.desktop}{
        margin: 0;
    }
`

export const Content = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: .6rem;
`

export const Title = styled.h1`
    font-size: 1.4rem;
    font-family: ${({theme}) => theme.font.family.primary};
    font-weight: 400;
    color: ${({theme}) => theme.color.font};

    ${({theme}) => theme.mq.desktop}{
        font-size: 2rem;
    }
`